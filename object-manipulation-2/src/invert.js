/* exported invert */
// define a function named invert
//  with parameter source
// create an empty object and assign to variable invertedObject
// use a for-in loop to iterate through keys of source
// use value for the current key of source as property of invertedObject
//  and assign key as the value for invertedObject's property
// return invertedObject

function invert(source) {
  var invertedObject = {};
  for (const key in source) {
    invertedObject[source[key]] = key;
  }
  return invertedObject;
}

// define a function named invert
//  with parameter source
// create an empty object and assign to variable invertedObject
// use a for-in loop to iterate through key in source and for each key:
//  assign key as the value
//  to the property, the value corresponding to key in source,
//  of the invertedObject
// return invertedObject
