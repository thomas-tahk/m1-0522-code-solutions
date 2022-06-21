/* exported isAnagram */
// define a function named isAnagram
// with parameters firstString and secondString
// use split to get characters of both firstString and secondString into separate arrays
// assign results to variables firstChars and secondChars respectively
// sort both firstChars and secondChars
// return the comparison of firstChars and secondChars

function isAnagram(firstString, secondString) {
  firstString = firstString.replace(/\s+/g, '');
  secondString = secondString.replace(/\s+/g, '');
  var firstChars = firstString.split('');
  var secondChars = secondString.split('');
  firstChars = firstChars.sort().join('');
  secondChars = secondChars.sort().join('');
  return firstChars === secondChars;
}

// define a function named isAnagram
// with parameters firstString and secondString
// replace blank spaces in firstString and secondString so that they no longer have spaces
// use split to get characters of both firstString and secondString into separate arrays
// assign results to variables firstChars and secondChars respectively
// sort both firstChars and secondChars
//  then convert them back to strings
// return the comparison of firstChars and secondChars
