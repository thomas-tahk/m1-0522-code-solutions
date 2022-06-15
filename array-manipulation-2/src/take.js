/* exported take */
// define a function named take
//  with two parameters array and count
// use the slice method to get the first count elements of given array
// and assign the new sliced array into a variable
// return variable

function take(array, count) {
  var takenArray = array.slice(0, count);
  return takenArray;
}

// define a function named take
//  with two parameters array and count
// use the slice method on array with 0 and count as its arguments
//  and assign the result to a new variable named takenArray
// return takenArray
