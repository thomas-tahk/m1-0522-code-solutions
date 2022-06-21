/* exported flatten */
// define a function named flatten
// with parameter array
// create an empty array and assign to variable flattened
// iterate through array
//  and if the value at current index of array is an array
//  then iterate through the array element
//  and push each sub array element into flattened
//  else, push value of current index of array into flattened

function flatten(array) {
  var flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let ind = 0; ind < array[i].length; ind++) {
        flattened.push(array[i][ind]);
      }
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
}

// define a function named flatten
// with parameter array
// create an empty array and assign to variable flattened
// iterate through array using for loop
//  and if the value at current index of array is an array
//    then iterate through this nested array using another for loop
//    and push each nested array element into flattened
//  else, push value at current index of array into flattened
