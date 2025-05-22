// import { T } from 'vitest/dist/chunks/environment.d.Dmw5ulng';
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
  const cacheLetter: any = {};

  for (const char of text) {
    if (!cacheLetter[char]) {
      cacheLetter[char] = 1;
    }
    cacheLetter[char]++;
  }

  let mostFrequent = '';
  let countOfLetter = 0;

  for (const char of text) {
    if (cacheLetter[char] > countOfLetter) {
      countOfLetter = cacheLetter[char];
      mostFrequent = char;
    }
  }

  return mostFrequent;
};

console.log(mostFrequentChar('aabbbcccccrrrrrr'));
