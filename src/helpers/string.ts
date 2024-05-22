/**
 * Helper function to formate a string into a  more
 * user friendly format by replacing dashes with spaces
 * and capitalising each word
 *
 * @param string the string to format
 * @returns the formatted string
 */
export function formatString(string: string): string {
  return string
    .replace(/-/g, " ")
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
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
    ? name.slice(0, -2) + " \u{2642}"
    : name.endsWith("-f")
    ? name.slice(0, -2) + " \u{2640}"
    : name;

  return capitalise(userFriendlyName);
}
