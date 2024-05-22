/**
 * Default minimised object type returned by the PokeAPI
 * that provides additional info via further api URIs
 */
export type NamedAPIResource = {
  name: string;
  url: string;
};

type SpritesFront = {
  front_default: string;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

interface SpritesDefault extends SpritesFront {
  back_default: string;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
}

type SpritesOther = {
  dream_world: {
    front_default: string;
    front_female: string | null;
  };
  home: SpritesFront;
  "official-artwork": {
    front_default: string;
    front_shiny: string | null;
  };
  showdown: SpritesDefault;
};

/**
 * "versions" is not fully typed due to time constraints and it not being used by
 * the PokeViewer but would be in production
 */
interface Sprites extends SpritesDefault {
  other: SpritesOther;
  versions: Object;
}

export type Type = {
  slot: number;
  type: NamedAPIResource;
};

export type Cries = {
  latest: string;
  legacy: string;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
};

type VersionGroupDetail = {
  level_learned_at: number;
  version_group: NamedAPIResource;
  move_learn_method: NamedAPIResource;
};

/**
 * version_group_details is not used by PokeViewer but would be fully typed in production version
 */
export type Move = {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
};

export type Ability = {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
};

/**
 * PokeAPI response object
 */
export type PokeApiRes = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
};

/**
 * held_items and game_indicies are not accessed by the PokeViewer are not
 * fully typed for this demo, but would be fully typed in a production
 * version without time constraints
 */
export type Pokemon = {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: NamedAPIResource[];
  game_indices: any[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

export type PokeAPIParams = {
  offset: number;
  limit: number;
};
