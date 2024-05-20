import React, { ReactElement, useEffect, useState } from "react";
import { getPokeTileData } from "../../helpers/api";
import {
  NamedAPIResource,
  PokeAPIParams,
  PokeApiRes,
} from "../../types/pokemonApi";
import { PokeTileDTO } from "../../types/pokemonDTO";
import { parsePokeID } from "../../helpers/primitives";
import LoadingSpinner from "../../blocks/LoadingSpinner/LoadingSpinner";
import NoContent from "../../blocks/NoContent/NoContent";

/**
 * Component to fetch the Generation 1 Pokemon and display a list of tile components
 * showing basic information for each creature
 *
 * @returns PokeList react element
 */
function PokeList(): ReactElement {
  const [pokeTileData, setPokeTileData] = useState<PokeTileDTO[]>([]);
  const [pokeTileDataLoading, setPokeTileDataLoading] =
    useState<boolean>(false);

  console.log(pokeTileData);
  console.log(pokeTileDataLoading);

  /**
   * Function to fetch the Generation 1 Pokemon, parse the response's NamedAPIResource
   * array into a PokeTileDTO array, then set in local state
   */
  function fetchPokemon(): void {
    // const queryParams: PokeAPIParams = { offset: 0, limit: 151 };
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

  // Fetch the Generation 1 pokemon on component first render
  useEffect(() => fetchPokemon(), []);

  return pokeTileDataLoading ? (
    <LoadingSpinner text="Loading Pokemon..." />
  ) : pokeTileData.length > 0 ? (
    <p style={{ textAlign: "center" }}>Pokemon Count: {pokeTileData.length}</p>
  ) : (
    <NoContent />
  );
}

export default PokeList;
