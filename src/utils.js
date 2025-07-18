// src/utils.js

export function pointsForWord(word) {
  let points = 0;
  for (const char of word.toLowerCase()) {
    if (!/[a-z]/.test(char)) continue; // skip non-alphabetic characters
    points += /[aeiou]/.test(char) ? 1 : 2;
  }
  return points;
}
