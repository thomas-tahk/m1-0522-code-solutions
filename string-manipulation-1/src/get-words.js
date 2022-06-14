/* exported getWords */
// define a function named getWords
// with a single parameter string
// create a new empty array
// push each word of a string (separations by space) as separate elements into the array
// return the array

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var wordsArray = string.split(' ');
    return wordsArray;
  }
}

// define a function named getWords
// with a single parameter string
// if the string is empty,
//  return an empty array
// else, split the string by a space and save the result into variable wordsArray
// return the wordsArray
