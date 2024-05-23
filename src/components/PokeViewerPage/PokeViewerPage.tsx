import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";
import {
  NamedAPIResource,
  PokeAPIParams,
  PokeApiRes,
} from "../../types/pokemonApi";
import { getPokeTileData } from "../../helpers/api";
import { generatePokeName } from "../../helpers/string";
import { PokeTileDTO } from "../../types/pokemonDTO";
import LoadingSpinner from "../../blocks/LoadingSpinner/LoadingSpinner";
import NoContent from "../../blocks/NoContent/NoContent";
import SearchBox from "../../blocks/Search/Search";
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

  const [search, setSearch] = useState<string>("");

  /**
   * Function to fetch the Generation 1 Pokemon, parse the response's NamedAPIResource
   * array into a PokeTileDTO array, then set in local state
   */
  function fetchPokemon(): void {
    const queryParams: PokeAPIParams = { offset: 0, limit: 151 };

    setPokeTileDataLoading(true);

    getPokeTileData(queryParams).then((res: PokeApiRes) => {
      if (res) {
        const pokeTiles: PokeTileDTO[] = res.results.map(
          (pokeDetails: NamedAPIResource) => {
            const pokeID: number = parsePokeID(pokeDetails.url);

            const pokeTileDTO: PokeTileDTO = {
              name: generatePokeName(pokeDetails.name),
              id: pokeID,
              url: pokeDetails.url,
            };

            return pokeTileDTO;
          }
        );

        setPokeTileData(pokeTiles);
      } else {
        setPokeTileData([]);
      }

      setPokeTileDataLoading(false);
    });
  }

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

  // Fetch the Gen 1 Pokemon on component load
  useEffect((): void => fetchPokemon(), []);

  return !pokeTileData || pokeTileDataLoading ? (
    <LoadingSpinner text="Loading Pokémon..." />
  ) : pokeTileData?.length > 0 ? (
    <>
      <h1>Generation 1 Pokémon</h1>
      <SearchBox
        id="poke-search"
        search={search}
        handleSearch={(e: ChangeEvent<HTMLInputElement>): void =>
          setSearch(e.target.value.trim())
        }
        cancelSearch={(): void => setSearch("")}
        placeholder="Search by name or Pokédex number..."
        icon
      />
      <PokeList pokeTileData={pokeTileData} search={search} />
    </>
  ) : (
    <NoContent />
  );
}

export default PokeViewerPage;
