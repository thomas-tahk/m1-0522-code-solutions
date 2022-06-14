/* exported tail */
// define a function named tail with
//   a single parameter of array
// create a new empty array
// use a for loop to iterate through the elements of array given in parameter
//  and push each element into the new array
//  as long as the index of the element is greater than 0.
// return the new array, now filled with same elements as given array except the first element.

function tail(array) {
  var tailArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      tailArray.push(array[i]);
    }
  }
  return tailArray;
}

// define a function named tail with
//  a single parameter of array
// create a new empty array assigned to variable named tailArray
// in a for loop with variable i (for index) set to 0, with condition express of i less than length of array, and final expression of i++
//  if the index of the element examined in current iteration is greater than 0,
//    then push the array element at current index to tailArray
// return tailArray
