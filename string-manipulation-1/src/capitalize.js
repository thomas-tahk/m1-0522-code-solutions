/* exported capitalize */
// define a function named capitalize
//  with a single parameter word
// lower case the entire string except first letter
// upper case the first letter
// return word

function capitalize(word) {
  var lowered = word.toLowerCase();
  var first = word.charAt(0);
  var capitalized = first.toUpperCase();
  var rest = lowered.slice(1);
  word = capitalized + rest;
  return word;
}

// define a function named capitalize
//  with a single parameter word
// lower case the entire string except first letter
//   assign that to variable named lowered
// obtain the first chraacter of word at index 0
//   assign that to variable named first
// convert the content of first to upper case
//   assign the result to variable capitalized
// slice all of the lowered contents except the first character
//   save the sliced result into the variable rest
// reassign word with concatenation of capitalized and rest
// return word
