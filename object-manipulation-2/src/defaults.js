/* exported defaults */
// define function named defaults
// with parameters target and source
// iterate through keys in source
//  if the same key cannot be found in target
//     then set target's key and value to be the same as that of those found in source

function defaults(target, source) {
  var targetKeys = Object.keys(target);
  for (const key in source) {
    if (!targetKeys.includes(key)) {
      target[key] = source[key];
    }
  }
}

// define function named defaults
// with parameters target and source
// using keys method of Object, generate an array of keys in target
//  and assign them to variable targetKeys
// iterate through keys in source
//  if key is not included within targetKeys,
//     then set target's key and value to be the same as that of those found in source
