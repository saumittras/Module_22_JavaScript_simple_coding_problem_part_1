/**
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 * 
 */

function longestWord(str) {
  const wordsOfStr = str.split(" ");
  let longestWord = wordsOfStr[0];
  for (const word of wordsOfStr) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const strin = "I am learning Programming to become a programmer";
console.log(longestWord(strin));
