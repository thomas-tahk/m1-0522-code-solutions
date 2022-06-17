/* exported unique */
// define a function named unique
// with parameter array
// create an empty array and assign it to variable uniqueArray
// iterate through array
//  if the value of the current index of array is not already in uniqueArray
//  then push the current array element into uniqueArray
// return uniqueArray

function unique(array) {
  var uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

// define a function named unique
// with parameter array
// create an empty array and assign it to variable uniqueArray
// iterate through array using a for loop
//  if the array element at current index is not already included in uniqueArray
//  then push the current array element into uniqueArray
// return uniqueArray
