/* exported pick */
// define function named pick
// with parameter source and keys
// create a new empty object and assign to variable pickedObject
// iterate through source
// if the current property is within keys array
// then add that property to pickedObject with the values from source of the same property
// return pickedObject

function pick(source, keys) {
  var pickedObject = {};
  for (const prop in source) {
    if (keys.includes(prop) && source[prop] !== undefined) {
      pickedObject[prop] = source[prop];
    }
  }
  return pickedObject;
}

// define function named pick
// with parameter source and keys
// create a new empty object and assign to variable pickedObject
// iterate through source
// if the current property is within keys array AND if the current property doesn't have an undefined value
// then add that property to pickedObject with the values from source of the same property
// return pickedObject
