/**
 *
 * array has some duplicate elements
 * []
 */

const biryanikhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniarr = noDuplicate(biryanikhor);
console.log(biryanikhor);
console.log(uniarr);
console.log(numbers);
const num = noDuplicate(numbers);
console.log(num);
