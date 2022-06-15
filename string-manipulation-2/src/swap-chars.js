/* exported swapChars */
// define a function named swapChars
// with parameters firstIndex, secondIndex, and string
// save character at first index in variable firstChar
// save character at second index in variable secondChar
// create and empty string and assign it to swappedString
// iterate through string
//  if the index of current iteration matches first index,
//    then concatenate secondChar to swappedString
// if the index of current iteration matches second index,
//    then concategnate firstChar to swappedString
// else
//    concatenate the string's current character to swappedString
// re-assign string as swappedString
// return string

function swapChars(firstIndex, secondIndex, string) {
  var firstChar = string.charAt(firstIndex);
  var secondChar = string.charAt(secondIndex);
  var swappedString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedString += secondChar;
    } else if (i === secondIndex) {
      swappedString += firstChar;
    } else {
      swappedString += string[i];
    }
  }
  string = swappedString;
  return string;
}

// define a function named swapChars
// with parameters firstIndex, secondIndex, and string
// save character at first index in variable firstChar
// save character at second index in variable secondChar
// create and empty string and assign it to variable swappedString
// iterate through string using for loop
//  if the index of current iteration matches first index,
//    then concatenate secondChar to swappedString
// if the index of current iteration matches second index,
//    then concategnate firstChar to swappedString
// else
//    concatenate the string's current character to swappedString
// re-assign string as swappedString
// return string
