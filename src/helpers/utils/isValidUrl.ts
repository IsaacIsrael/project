/**
 * Checks if a given string is a valid URL.
 *
 * @param string - The string to be checked.
 * @returns `true` if the string is a valid URL, otherwise `false`.
 */
export function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}
