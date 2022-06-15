/* exported takeRight */
// define a function named takeRight
//  with parameters array and count
// use the slice method on array
//  with one argument -count
//  and assign the result to variable named takeRightArray
// return takeRightArray

function takeRight(array, count) {
  var takeRightArray = array.slice(-count);
  return takeRightArray;
}

// define a function named takeRight
//  with parameters array and count
// use the slice method on array
//  with one argument -count to make a shallow copy for count elements from the right
//  and assign the result to variable named takeRightArray
// return takeRightArray
