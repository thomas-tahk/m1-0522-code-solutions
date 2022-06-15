/* exported isUpperCased */
// define a function named isUpperCased
// with a single parameter word
// iterate through word
// and check if each character is the same as their upper cased character
// return false if any of the characters are not upper case
// else return true

function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

// define a function named isUpperCased
// with a single parameter word
// use a for loop to iterate through word
// and check if each character is the same as their upper cased character
// if any character is not their upper case, then return false
// if every character was uppercase, then return true
