/* eslint-disable @typescript-eslint/no-explicit-any */
import isEqual from '@utils/isEqual';
import isPlainObject from '@utils/isPlainObject';
import transform from '@utils/transform';

/**
 * Compares two objects and returns an object containing the previous values and the next values for the differences.
 * The comparison is limited to a depth of 3 levels.
 *
 * @param obj1 - The first object to compare.
 * @param obj2 - The second object to compare.
 * @param depth - The current depth of the comparison (default is 0).
 * @returns An object containing the previous values and the next values for the differences.
 *
 * @example
 * ```typescript
 * import getObjectDiff from '@utils/getDifference';
 *
 * const obj1 = { a: 1, b: 2, c: 3 };
 * const result = getObjectDiff(obj1, obj2);
 * const obj2 = { a: 1, b: 2, c: 4 };
 * console.log(result);
 * // {
 * //   prev: { c: 3 },
 * //   next: { c: 4 }
 * // }
 * ```
 */
export default function getObjectDiff(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
  depth: number = 0,
): { next: Record<string, any>; prev: Record<string, any> } {
  const prev: Record<string, any> = {};
  const next: Record<string, any> = {};

  if (depth > 3) {
    return { next, prev };
  }

  transform(obj1, (result: Record<string, any>, value, key: string) => {
    if (!isEqual(value, obj2[key])) {
      if (isPlainObject(value) && isPlainObject(obj2[key])) {
        const diff = getObjectDiff(value, obj2[key], depth + 1);
        if (Object.keys(diff.prev).length > 0) {
          prev[key] = diff.prev;
          next[key] = diff.next;
        }
      } else {
        prev[key] = value;
        next[key] = obj2[key];
      }
    }
  });

  return { next, prev };
}
