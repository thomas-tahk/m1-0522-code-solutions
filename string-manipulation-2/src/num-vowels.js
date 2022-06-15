/* exported numVowels */
// define a function named numVowels
// with parameter string
// create an array with all of the vowels, both lower and uppercase
//  and assign it to variable anmed vowels
// assign the number 0 to a variable named vowelCount
// iterate through the string
// check if each character of the string can be found within vowels
//  for each one found, increment vowelCount by 1
// return vowelCount

function numVowels(string) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

// define a function named numVowels
// with parameter string
// create an array of strings of all the vowels, both lower and uppercase
//  and assign it to variable named vowels
// assign the number 0 to a variable named vowelCount
// iterate through the string
//  call .includes method on vowels with the argument of the current character of string
//  for each vowel, increment vowelCount by 1
// return vowelCount
