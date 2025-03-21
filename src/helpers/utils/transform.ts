import _transform from 'lodash/transform';

/**
 * A utility function that transforms an object.
 *
 * This function is a wrapper around the lodash `_transform` function.
 * It iterates over own and inherited enumerable string keyed properties of an object and invokes `iteratee` for each property.
 * The iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @param object - The object to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @param accumulator - The custom accumulator value.
 * @returns Returns the accumulated value.
 *
 * @example
 * ```typescript
 * import transform from '@utils/transform';
 *
 * const object = { 'a': 1, 'b': 2, 'c': 3 };
 * const result = transform(object, (result, value, key) => {
 *   result[key] = value * 2;
 * }, {});
 * console.log(result); // { 'a': 2, 'b': 4, 'c': 6 }
 * ```
 */
const transform = _transform;
export default transform;
