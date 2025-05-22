import { NestedObjectKeysFn } from './types';

/**
 * @task Nested Object Keys
 * @description Return all nested keys of an object as dot-delimited paths.
 * The function should recurse through all nested objects and return full paths to all leaf and intermediate keys.
 *
 * @example
 * Input: { a: { b: { c: 1 } } }
 * Output: ['a', 'a.b', 'a.b.c']
 *
 * Input: { x: 1, y: { z: 2 } }
 * Output: ['x', 'y', 'y.z']
 *
 * Input: {}
 * Output: []
 */
export const nestedObjectKeys: NestedObjectKeysFn = (obj) => {
  const result: string[] = [];

  function extractPaths(currentObj: any, currentPath: string) {
    if (typeof currentObj !== 'object' || currentObj === null) {
      return;
    }

    for (const key in currentObj) {
      let newPath = key;
      if (currentPath) {
        newPath = currentPath + '.' + key;
      }
      result.push(newPath);

      if (
        typeof currentObj[key] === 'object' &&
        currentObj[key] !== null &&
        !Array.isArray(currentObj[key])
      ) {
        extractPaths(currentObj[key], newPath);
      }
    }
  }

  extractPaths(obj, '');

  return result;
};

console.log(nestedObjectKeys({ a: { b: { c: 1 } } }));
