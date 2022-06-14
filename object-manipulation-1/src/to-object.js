/* exported toObject */
// define a function named toObject
// with the parameter keyValuePair, an array containing a string key and any js value
// define an empty object and assign it to variable
// access the first element of keyValuePair set that as property of object
//  and assign that property the value of the second element of keyValuePair
// return the object

function toObject(keyValuePair) {
  var makeObject = {};
  makeObject[keyValuePair[0]] = keyValuePair[1];
  return makeObject;
}

// define a function named toObject
// with the parameter keyValuePair, an array containing a string key and any js value
// define an empty object and assign it to variable makeObject
// access the first element of keyValuePair set that as property of makeObject
//  and assign that property the value of the second element of keyValuePair
// return makeObject
