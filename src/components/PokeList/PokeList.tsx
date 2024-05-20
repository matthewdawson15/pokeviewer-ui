import React, { ReactElement, useEffect, useState } from "react";
import { PokeTileDTO } from "../../types/pokemonDTO";
import PokeTile from "../PokeTile/PokeTile";
import Pagination from "../../blocks/Pagination/Pagination";
import Modal from "../../blocks/Modal/Modal";
import Button from "../../blocks/Button/Button";
import "./PokeList.scss";

type PokeListParam = {
  pokeTileData: PokeTileDTO[];
};

/**
 * Component to display a list of tile components showing basic information for each creature
 *
 * @returns PokeList react element
 */
function PokeList({ pokeTileData }: PokeListParam): ReactElement {
  const [selectedPokemon, setSelectedPokemon] = useState<PokeTileDTO | null>(
    null
  );

  const [pageSize, setPageSize] = useState<number>(15);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageNumbers, setPageNumbers] = useState<number>(1);

  /**
   * Function to filter the pokiTileData DTO array for
   * pagination.
   *
   * @param pokeTileData the pokemon tile DTO to filter
   * @returns the filtered tile DTO
   */
  function filterPokiTileData(pokeTileData: PokeTileDTO[]): PokeTileDTO[] {
    /* if the number of pages required is greater than one, extract the items
     to be displayed for that page ready to be displayed */
    if (currentPage && pageNumbers > 1) {
      const pageMax = currentPage * pageSize;
      const pageMin = pageMax - pageSize;

      const filteredPokiTileData: PokeTileDTO[] = pokeTileData.slice(
        pageMin,
        pageMax
      );
      return filteredPokiTileData;
    } else {
      return pokeTileData;
    }
  }

  // recalculate the number of pages required for the data whenever pageSize is updated
  useEffect(
    (): void => setPageNumbers(Math.ceil(pokeTileData.length / pageSize)),
    [pageSize]
  );

  return (
    <>
      <div className="poke-list">
        {filterPokiTileData(pokeTileData).map(
          (pokeTileDTO: PokeTileDTO): ReactElement => (
            <PokeTile
              key={pokeTileDTO.id}
              onClick={(): void => setSelectedPokemon(pokeTileDTO)}
              pokeTileDTO={pokeTileDTO}
            />
          )
        )}
      </div>
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        setPageSize={setPageSize}
        setCurrentPage={setCurrentPage}
      />
      <Modal modalOpen={selectedPokemon !== null}>
        <div>
          <h1>{selectedPokemon?.name}</h1>
          <p>Pokédex Number: {selectedPokemon?.id}</p>
          <Button onClick={(): void => setSelectedPokemon(null)}>
            <span>Close</span>
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default PokeList;
