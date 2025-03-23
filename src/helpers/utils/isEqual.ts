import _isEqual from 'lodash/isEqual';

/**
 * Checks if two values are deeply equal.
 *
 * This function is a wrapper around the lodash `_isEqual` function.
 * It performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param value - The first value to compare.
 * @param other - The second value to compare.
 * @returns `true` if the values are deeply equal, otherwise `false`.
 *
 * @example
 * ```typescript
 * import isEqual from '@utils/isEqual';
 *
 * console.log(isEqual({ a: 1 }, { a: 1 })); // true
 * console.log(isEqual({ a: 1 }, { a: 2 })); // false
 * console.log(isEqual([1, 2, 3], [1, 2, 3])); // true
 * console.log(isEqual([1, 2, 3], [3, 2, 1])); // false
 * ```
 */
const isEqual = _isEqual;
export default isEqual;
