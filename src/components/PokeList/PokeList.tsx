import React, { ReactElement, useEffect, useState } from "react";
import { getPokeTileData } from "../../helpers/api";
import { parsePokeID } from "../../helpers/primitives";
import {
  NamedAPIResource,
  PokeAPIParams,
  PokeApiRes,
} from "../../types/pokemonApi";
import { PokeTileDTO } from "../../types/pokemonDTO";

import LoadingSpinner from "../../blocks/LoadingSpinner/LoadingSpinner";
import NoContent from "../../blocks/NoContent/NoContent";
import PokeTile from "../PokeTile/PokeTile";
import "./PokeList.scss";

/**
 * Component to fetch the Generation 1 Pokemon and display a list of tile components
 * showing basic information for each creature
 *
 * @returns PokeList react element
 */
function PokeList(): ReactElement {
  const [pokeTileData, setPokeTileData] = useState<PokeTileDTO[] | null>(null);
  const [pokeTileDataLoading, setPokeTileDataLoading] =
    useState<boolean>(false);
  const [selectedPokemonURL, setSelectedPokemonURL] = useState<string | null>(
    null
  );

  /**
   * Function to fetch the Generation 1 Pokemon, parse the response's NamedAPIResource
   * array into a PokeTileDTO array, then set in local state
   */
  function fetchPokemon(): void {
    const queryParams: PokeAPIParams = { offset: 0, limit: 151 };

    setPokeTileDataLoading(true);

    getPokeTileData(queryParams).then((res: PokeApiRes) => {
      const pokeTiles: PokeTileDTO[] = res.results.map(
        (pokeDetails: NamedAPIResource) => {
          const pokeID: number = parsePokeID(pokeDetails.url);

          const pokeTileDTO: PokeTileDTO = {
            ...pokeDetails,
            id: pokeID,
          };

          return pokeTileDTO;
        }
      );

      setPokeTileData(pokeTiles);
      setPokeTileDataLoading(false);
    });
  }

  // Fetch the Gen 1 Pokemon on component load
  useEffect(() => fetchPokemon(), []);

  return (
    <>
      <h1>Generation 1 Pokémon</h1>
      {pokeTileDataLoading ? (
        <LoadingSpinner text="Loading Pokemon..." />
      ) : pokeTileData && pokeTileData.length > 0 ? (
        <div className="poke-list">
          {pokeTileData.map(
            (pokeTileDTO): ReactElement => (
              <PokeTile
                key={pokeTileDTO.id}
                onClick={(): void => setSelectedPokemonURL(pokeTileDTO.url)}
                pokeTileDTO={pokeTileDTO}
              />
            )
          )}
        </div>
      ) : (
        <NoContent />
      )}
    </>
  );
}

export default PokeList;
