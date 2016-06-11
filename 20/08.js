'use strict';

// Given a string s and an array of smaller strings T, design a method to
// search s for each small string in T.

// DATA ========================================================================

var s = 'catbatsatpumpkinecksat';

var T = [
  'cat',
  'bat',
  'sat',
  'pumpkin',
  'neck',
  'kinec'
];



// MY SOLUTION =================================================================

// @returns true if strings match.
function isMatching(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;
  for (var j = 0; j < stringA.length; j++) {
    if (stringA[j] !== stringB[j]) return false;
  }
  return true;
}

function findWordsInString(string, wordsArray) {

  var TPlace = {};

  for (var wordIndex = 0; wordIndex < wordsArray.length; wordIndex++) {
    var word = wordsArray[wordIndex];

    // Setup.
    var firstLetter = word[0];
    var wordLength = word.length;
    var result = [];

    // Search for word entry points.
    for (var i = 0; i < string.length - wordLength + 1; i++) {
      if (firstLetter == s[i]) {
        var matched = isMatching(word, string.substring(i, i + wordLength));

        // Append if the word is found at that index.
        if (matched) result.push(i);
      }
    }

    // Add to the resulting object.
    TPlace[word] = result;
  }

  return TPlace;
}

console.log(findWordsInString(s, T));



// BOOK SOLUTION ===============================================================

// The book solution creates a suffix tree.
// TODO: Implement book solution.
