/* exported isLowerCased */
// define a function named isLowerCased
// with a single parameter word
// iterate through word
// and check if each character is the same as their lower cased character
// return false if any of the characters are not lower case
// else return true

function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

// define a function named isLowerCased
// with a single parameter word
// use a for loop to iterate through word
// and check if each character is the same as their lower cased character
// if any character is not their lower case, then return false
// if every character was lower case, then return true
