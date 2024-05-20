/**
 * Default minimised object type returned by the PokeAPI
 * that provides additional info via further api URIs
 */
export type NamedAPIResource = {
  name: string;
  url: string;
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


export type PokeAPIParams = {
  offset: number;
  limit: number;
};

