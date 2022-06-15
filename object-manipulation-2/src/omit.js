/* exported omit */
function omit(source, keys) {
  var omittedObject = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      omittedObject[prop] = source[prop];
    }
  }
  return omittedObject;
}
