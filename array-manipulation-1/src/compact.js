/* exported compact */
// define a function named compact
//  with a single parameter array
//  it checks the array for any false-y elements and omits them
//   which includes:
//    false, "", null, Nan, 0, -0, undefined
//  then returns all the remaining truth-y elements in a new array in their original order

function compact(array) {
  var compactArray = [];
  for (let i = 0; i < array.length; i++) {
    array[i] && compactArray.push(array[i]);
  }
  return compactArray;
}

// define a function named compact
//  with a single parameter array
// create an empty array and assign it to variable compactArray
// use a for loop to iterate through the array
//   and for any valid, non-empty array element, push that element into compactArray
// return compactArray
