/* exported reverseWords */
// define a function named reverseWords
// with parameter string
// define a variable words which contains an array of words within string
// define variable reversedWords which contains an empty array
// iterate through words
//  for each word,
//    split it by each character,
//    reverse the resulting array
//    then reconvert to string
//    push the result to reversedWords
// return reversedWords converted to string

function reverseWords(string) {
  var words = string.split(' ');
  var reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    reversedWords.push(words[i].split('').reverse().join(''));
  }
  return reversedWords.join(' ');
}

// define a function named reverseWords
// with parameter string
// define variable words which contains an array of words within string
// define variable reversedWords which contains an empty array
// iterate through words using a for loop
//  for each word,
//    split it by each character ('')
//    call reverse method on the resulting array
//    then reconvert to string using join method with argument ''
//    push the resulting string to reversedWords
// call join method with ' ' argument on reversedWords and return it
