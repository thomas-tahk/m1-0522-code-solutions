/* exported initial */
function initial(array) {
  var initialArray = [];
  var i = 0;
  while (i < array.length - 1) {
    initialArray.push(array[i]);
    i += 1;
  }
  return initialArray;
}
