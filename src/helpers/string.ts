/**
 * Helper function to capitalise a string
 *
 * @param string the string to capitalise
 * @returns the capitalised string
 */
function capitalise(string: string): string {
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
