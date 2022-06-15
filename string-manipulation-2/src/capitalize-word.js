/* exported capitalizeWord */
// define a function named capitalizeWord
// with parameter word
// call toLowerCase method on word
// and assign the result to variable lowerWord
// if lowerWord is 'javascript'
//  return JavaScript
// else obtain first character of lowerWord and save it to variable first
// call toUpperCase method on first and save it to firstCap
// slice all but first character of lowerWord and assign to variable rest
// return concatenation of firstCap and rest

function capitalizeWord(word) {
  var lowerWord = word.toLowerCase();
  if (lowerWord === 'javascript') {
    return 'JavaScript';
  } else {
    var first = lowerWord.charAt(0);
    var firstCap = first.toUpperCase();
    var rest = lowerWord.slice(1);
    return firstCap + rest;
  }
}

// define a function named capitalizeWord
// with parameter word
// call toLowerCase method on word
//  and assign the result to variable lowerWord
// if lowerWord is 'javascript'
//  return JavaScript
// else call charAt method with argument 0 on lowerWord
//   assign it to variable first
// call toUpperCase method on first
//   and assign to variable firstCap
// call slice method on lowerWord with argument 1
//   and assign to variable rest
// return concatenation of firstCap and rest
