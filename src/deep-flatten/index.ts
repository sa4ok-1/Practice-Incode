import { DeepFlattenFn } from 'deep-flatten/types';

/**
 * @task Deep Flatten
 * @description Flatten a nested array structure into a single-level array. Any depth of nested arrays should be recursively flattened.
 *
 * @example
 * Input: [1, [2, [3, 4]], 5]
 * Output: [1, 2, 3, 4, 5]
 *
 * Input: [[[[1]]], 2, [3, [4]]]
 * Output: [1, 2, 3, 4]
 *
 * Input: []
 * Output: []
 */
export const deepFlatten: DeepFlattenFn = (input) => {
  const res: any[] = [];

  input.forEach((element) => {
    if (Array.isArray(element)) {
      res.push(...deepFlatten(element));
      return;
    }
    res.push(element);
  });

  return res;
};

console.log(deepFlatten([1, [2, [3, 4]], 5]));
