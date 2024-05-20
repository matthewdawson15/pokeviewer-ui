/**
 * Helper function to parse the Pokemon's unique ID from it's URL
 *
 * @param url the Pokemon's API url
 * @returns the pokemon's unique ID
 */
export function parsePokeID(url: string): number {
  return parseInt(url[url.length - 2]);
}
