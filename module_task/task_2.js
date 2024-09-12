/**
 *
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 *
 */

function repeatedCount(num, arr) {
  let count = 0;
  for (const arrNum of arr) {
    if (num === arrNum) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const result = repeatedCount(25, numbers);

console.log(result);
