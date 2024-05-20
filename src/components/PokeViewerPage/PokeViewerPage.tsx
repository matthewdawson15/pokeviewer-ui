import React, { ReactElement, useEffect, useState } from "react";
import { getPokeTileData } from "../../helpers/api";
import {
  NamedAPIResource,
  PokeAPIParams,
  PokeApiRes,
} from "../../types/pokemonApi";
import { PokeTileDTO } from "../../types/pokemonDTO";
import LoadingSpinner from "../../blocks/LoadingSpinner/LoadingSpinner";
import NoContent from "../../blocks/NoContent/NoContent";
import PokeList from "../PokeList/PokeList";

/**
 * Component to fetch the Generation 1 Pokemon and display a PokeList of tiles
 *
 * @returns PokeViewerPage react element
 */
function PokeViewerPage(): ReactElement {
  const [pokeTileData, setPokeTileData] = useState<PokeTileDTO[] | null>(null);

  const [pokeTileDataLoading, setPokeTileDataLoading] =
    useState<boolean>(false);

  /**
   * Function to parse the Pokemon's unique ID from it's URL
   *
   * @param url the Pokemon's API url
   * @returns the pokemon's unique ID
   */
  function parsePokeID(url: string): number {
    const id: string | undefined = url
      .split("/")
      .filter((string: string) => string)
      .pop();

    if (id) {
      return parseInt(id);
    } else {
      throw new Error("Cannot parse Pokemon ID from provided URL");
    }
  }

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
  useEffect((): void => fetchPokemon(), []);

  return !pokeTileData || pokeTileDataLoading ? (
    <LoadingSpinner text="Loading Pokemon..." />
  ) : pokeTileData?.length > 0 ? (
    <>
      <h1>Generation 1 Pokémon</h1>
      <PokeList pokeTileData={pokeTileData} />
    </>
  ) : (
    <NoContent />
  );
}

export default PokeViewerPage;
