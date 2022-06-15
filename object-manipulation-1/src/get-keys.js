/* exported getKeys */
// define a function named getKeys
//  with parameter object
// create an empty array
// use for-in loop to iterate through properties in object
//  and add the properties (keys) to the array
// return the array

function getKeys(object) {
  var keysArray = [];
  for (const key in object) {
    keysArray.push(key);
  }
  return keysArray;
}

// define a function named getKeys
//  with parameter object
// create an empty array and assign to variable keysArray
// use for-in loop to iterate through properties, the constant variable key, in object
//  and add the keys to the array
// return the array
