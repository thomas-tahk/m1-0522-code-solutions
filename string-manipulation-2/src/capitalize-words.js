/* exported capitalizeWords */
// define a function named capitalizeWords
// with parameter string
// shamelessly copy most of code from capitalize-word
// by defining function named capword
//  with parameter word
//  which essentially capitalizes a word by capitalizing just first character and lowercasing the rest
// split given string with argument ' '
//  save the resulting array into variable wordsArray
// create an empty string and assign to variable capString
// iterate through the wordsArray
//   capitalize each element (word) of wordsArray by calling capWord on the element
//   and concatenate and extra space
//   then concatenate them into capString
// reassign string to capString but with the end trimmed due to extra space from looping
// return string

function capitalizeWords(string) {
  function capWord(word) {
    var lowerWord = word.toLowerCase();
    var first = lowerWord.charAt(0);
    var firstCap = first.toUpperCase();
    var rest = lowerWord.slice(1);
    return firstCap + rest;
  }
  var wordsArray = string.split(' ');
  var capString = '';
  for (let i = 0; i < wordsArray.length; i++) {
    capString += capWord(wordsArray[i]) + ' ';
  }
  string = capString.trimEnd();
  return string;
}

// define a function named capitalizeWords
// with parameter string
// define another function named capword
//  with parameter word
//  which calls toLowerCase on word and assigns to lowerWord
//  then calls charAt with argument 0 on lowerWord and assigns to first
//  then calls toUpperCase on first and assigns to firstCap
//  then calls slice with argument 1 on lowerWord and assigns to rest
//  finally returns concatenation of firstCap and rest
// call split on string with argument ' '
//  save the resulting array into variable wordsArray
// create an empty string and assign to variable capString
// iterate through the wordsArray using for loop
//   capitalize each element (word) of wordsArray by calling capWord with argument of i-th element of wordsArray
//   and concatenate that and extra space
//   then concatenate them together with capString
// reassign string to result of calling trimEnd on capString due to extra space from looping earlier
// return string
