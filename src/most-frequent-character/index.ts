import { MostFrequentCharFn } from './types';

/**
 * @task Most Frequent Character
 * @description Given a string, return the character that appears most frequently.
 * If multiple characters share the same highest frequency, return the one that appears first in the string.
 * If the input string is empty, return an empty string.
 *
 * @example
 * Input: 'aabbbcc'
 * Output: 'b'
 *
 * Input: 'xyz'
 * Output: 'x'
 *
 * Input: ''
 * Output: ''
 */
export const mostFrequentChar: MostFrequentCharFn = (text) => {
  if (text === '') {
    return '';
  }
  const cacheLetter: Record<string, number> = {};

  [...text].forEach((char) => {
    cacheLetter[char] = (cacheLetter[char] ?? 0) + 1;
  });

  return Object.entries(cacheLetter).reduce(
    (maxChar, [char, count]) => (count > cacheLetter[maxChar] ? char : maxChar),
    text[0],
  );
};
console.log(mostFrequentChar('aabbbcccccrrrrrr'));
