import { formatISO } from 'date-fns';

/**
 * Formats a date into ISO 8601 format.
 *
 * This function is a re-export of the `formatISO` function from the `date-fns` library.
 *
 * @param date - The original date to format.
 * @param options - An object with options.
 * @returns The formatted date string in ISO 8601 format.
 */
const formatDateISO = formatISO;
export default formatDateISO;
