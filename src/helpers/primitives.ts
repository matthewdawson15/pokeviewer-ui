import { pokeImageBaseUrl } from "../constants/urls";

/**
 * Helper function to generate the image URL for each pokemon tile
 *
 * @param id the pokemon's unique ID
 * @returns raw github URL string linking to the official artwork
 * image of the pokemon on the PokeAPI's repo
 */
export function createPokeImageURL(id: number): string {
  return pokeImageBaseUrl + id + ".png";
}

/**
 * Helper function to parse the Pokemon's unique ID from it's URL
 *
 * @param url the Pokemon's API url
 * @returns the pokemon's unique ID
 */
export function parsePokeID(url: string): number {
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
 * Helper function to capitalise a string
 *
 * @param string the string to capitalise
 * @returns the capitalised string
 */
export function capitalise(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Helper function to create a human readable version of
 * a pokemon's name, including capitalisation and a more
 * user friendly male/female designation
 *
 * @param name the original pokemon name string
 * @returns the more user friendly name
 */
export function generatePokeName(name: string): string {
  const userFriendlyName: string = name.endsWith("-m")
    ? name.slice(0, -2) + " (Male)"
    : name.endsWith("-f")
    ? name.slice(0, -2) + " (Female)"
    : name;

  return capitalise(userFriendlyName);
}
