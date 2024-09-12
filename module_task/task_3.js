/**
 * 
 * Task-3:
Write a function to count the number of vowels in a string.
 */

function vowelscount(str) {
  const vowelsLetters = ["a", "e", "i", "o", "u"];
  const lowercaseStr = str.toLowerCase();
  let count = 0;
  for (const letter of str) {
    if (vowelsLetters.includes(letter)) {
      count++;
    }
  }
  return count;
}

console.log(vowelscount("Ratna"));
