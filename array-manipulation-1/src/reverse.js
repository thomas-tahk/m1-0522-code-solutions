/* exported reverse */
// define a function named reverse
//  with a single parameter of array
// create a new empty array assigned to a variable named reverseArray
// iterate through array starting from the last element and ending at the first element
//  and push each element in to reverseArray
// return reverseArray

function reverse(array) {
  var reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

// define a function named reverse
//  with a single parameter of array
// create a new empty array and assign it to variable named reverseArray
// in a for loop, iterate through the array starting from the last element and ending at first element
//  push each element from array into reverseArray
// return reverseArray
