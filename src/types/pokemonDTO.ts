import { NamedAPIResource } from "./pokemonApi";

export type AbilityDTO = {
  ability: string;
  isHidden: boolean;
};

export type MoveDTO = {
  move: string;
  levelLearned: number;
};

export type CharacteristicsDTO = {
  abilities: AbilityDTO[];
  moves: MoveDTO[];
  types: string[];
};

export type ImagesDTO = {
  artwork: string;
  animation: string;
};

export type MediaDTO = {
  images: ImagesDTO;
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
  species: string;
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
