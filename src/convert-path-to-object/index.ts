import { ConvertPathToObjectFn } from './types';

/**
 * @task Convert Path to Object
 * @description Convert a dot-delimited string path into a nested object structure with a value at the end.
 * The function takes a path string (like 'a.b.c') and a value, then returns an object such that the path is represented as nested keys leading to the given value.
 *
 * @example
 * Input:
 * ('a.b.c', 42)
 * Output:
 * { a: { b: { c: 42 } } }
 *
 * Input:
 * ('x', 'value')
 * Output:
 * { x: 'value' }
 *
 * Input:
 * ('', 123)
 * Output:
 * {}
 */

export const convertPathToObject: ConvertPathToObjectFn = (path, value) => {
  if (path === '') {
    return {};
  }

  const keys = path.split('.');
  let result: unknown = value;

  for (let i = keys.length - 1; i >= 0; i--) {
    result = { [keys[i]]: result };
  }

  return result as Record<string, unknown>;
};

// reduceRight()
export const convertPathToObject: ConvertPathToObjectFn = (path, value) => {
  if (path === '') {
    return {};
  }
  
  return path.split('.').reduceRight<Record<string, unknown>>(
    (acc, key) => ({ [key]: acc }),
    value as Record<string, unknown>
  );
};

