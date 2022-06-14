/* exported reverseWord */

function reverseWord(word) {
  var reversedString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedString += word[i];
  }
  return reversedString;
}
