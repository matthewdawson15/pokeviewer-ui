import { NamedAPIResource } from "./pokemonApi";

export type AbilityDTO = {
  ability: string;
  isHidden: boolean;
};

export type StatDTO = {
  name: string;
  baseStat: number;
  effort: number;
};

export type CharacteristicsDTO = {
  stats: StatDTO[];
  abilities: AbilityDTO[];
  types: string[];
};

export type MediaDTO = {
  artwork: string;
  cry: string;
};

/**
 * Data Transfer Object containing all PokeAPI data used by the
 * PokeViewer, manipulated into the correct format to be visualised.
 *
 * All untyped and unused PokeAPI properties are excluded from this
 * DTO to prevent any unintended usage.
 */
export type PokemonDTO = {
  id: number;
  name: string;
  height: number;
  weight: number;
  characteristics: CharacteristicsDTO;
  media: MediaDTO;
};

/**
 * Initial properties for Pokemon Tile, consisting of name,
 * url for further info, and the pokemon's unique ID
 */
export interface PokeTileDTO extends NamedAPIResource {
  id: number;
}
