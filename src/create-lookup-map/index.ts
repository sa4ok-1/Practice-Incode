import { ItemWithId } from './types';

/**
 * @task Create Lookup Map
 * @description Transform an array of objects with `id: number` into a lookup map using `id` as the key.
 * If the array contains multiple objects with the same `id`, the last one will overwrite the previous.
 *
 * @example
 * Input:
 * [ { id: 1, name: 'A' }, { id: 2, name: 'B' } ]
 * Output:
 * {
 *   1: { id: 1, name: 'A' },
 *   2: { id: 2, name: 'B' }
 * }
 */
export const createLookupMap = <T extends ItemWithId>(
  array: T[],
): Record<number, T> => {
  const map: Record<number, T> = {};

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    map[item.id] = item;
  }

  return map;
};
