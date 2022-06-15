/* exported includes */
// define a function named includes
//  with parameters array and value
//  use a for loop to iterate through the given array
//   and if any of the elements match value,
//    return true
//  if none of the elements matched value,
//    return false

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

// define a function named includes
//  with parameters array and value
//  use a for loop to iterate through the given array by index
//   and if value is strictly equal to any element of the array,
//    return true
//  otherwise,
//    return false
