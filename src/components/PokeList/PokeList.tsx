import React, { ReactElement, useEffect, useState } from "react";
import { PokeTileDTO } from "../../types/pokemonDTO";
import PokeTile from "../PokeTile/PokeTile";
import Pagination from "../../blocks/Pagination/Pagination";
import Modal from "../../blocks/Modal/Modal";
import PokeDetailsWrapper from "../PokeDetailsWrapper/PokeDetailsWrapper";
import "./PokeList.scss";

type PokeListProps = {
  pokeTileData: PokeTileDTO[];
  search: string;
};

/**
 * Component to display a list of tile components showing basic information for each creature
 *
 * @returns PokeList react element
 */
function PokeList({ pokeTileData, search }: PokeListProps): ReactElement {
  const [selectedPokemonID, setSelectedPokemonID] = useState<number | null>(
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
    if (search) {
      const filteredPokiTileData: PokeTileDTO[] = pokeTileData.filter(
        (pokeTileDTO: PokeTileDTO): boolean => {
          const idSearchString = search.startsWith("#")
            ? search.slice(1)
            : search;

          return (
            pokeTileDTO.name.toLowerCase().startsWith(search.toLowerCase()) ||
            pokeTileDTO.id.toString().startsWith(idSearchString)
          );
        }
      );
      return filteredPokiTileData;
    } else if (currentPage && pageNumbers > 1) {
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
  useEffect((): void => {
    const newPageNumbers: number = Math.ceil(pokeTileData.length / pageSize);

    // update current page if greater than new max page
    if (currentPage > newPageNumbers) {
      setCurrentPage(newPageNumbers);
    }

    setPageNumbers(newPageNumbers);
  }, [pageSize]);

  return (
    <>
      <div className="poke-list">
        {filterPokiTileData(pokeTileData).map(
          (pokeTileDTO: PokeTileDTO): ReactElement => (
            <PokeTile
              key={pokeTileDTO.id}
              onClick={(): void => setSelectedPokemonID(pokeTileDTO.id)}
              pokeTileDTO={pokeTileDTO}
            />
          )
        )}
      </div>
      {!search && (
        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          pageNumbers={pageNumbers}
          setPageSize={setPageSize}
          setCurrentPage={setCurrentPage}
        />
      )}
      {selectedPokemonID !== null && (
        <Modal
          modalOpen={selectedPokemonID !== null}
          closeModal={(): void => setSelectedPokemonID(null)}
        >
          <PokeDetailsWrapper
            id={selectedPokemonID}
            setSelectedPokemon={(): void => setSelectedPokemonID(null)}
          />
        </Modal>
      )}
    </>
  );
}

export default PokeList;
