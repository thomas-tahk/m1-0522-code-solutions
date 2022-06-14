/* exported getValues */
// define a function named getValues
//  with parameter object
// create an empty array
// use for-in loop to iterate through properties(keys) in object
//  and push the values accessed using the keys into the array
// return the array

function getValues(object) {
  var valuesArray = [];
  for (const key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}

// define a function named getValues
//  with parameter object
// create an empty array and assign it to valuesArray
// use for-in loop to iterate through properties(keys) in object
//  and push the values accessed using the keys into the valuesArray
// return the valuesArray
