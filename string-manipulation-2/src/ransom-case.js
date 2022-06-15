/* exported ransomCase */
// define function named ransomCase
//  with parameter string
// create an empty string and assign to variable ransomString
// iterate through string
//   if the index of the current character of string is odd,
//     then call toUpperCase method on that character before
//     concatenating the character to ransomString
//   else,
//     call toLowerCase method on current string character
//     then concatenate to ransomString
// return ransomString

function ransomCase(string) {
  var ransomString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      ransomString += string[i].toUpperCase();
    } else {
      ransomString += string[i].toLowerCase();
    }
  }
  return ransomString;
}

// define function named ransomCase
//  with parameter string
// create an empty string and assign to variable ransomString
// iterate through string
//   if the index of the current character of string is odd,
//     then call toUpperCase method on that character
//     then concatenate to ransomString
//   else,
//     call toLowerCase method on current string character
//     then concatenate to ransomString
// return ransomString
