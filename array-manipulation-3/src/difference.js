/* exported difference */
// define a function named difference
// with parameters first and second (both arrays)
// create an empty array and assign to variable differenceArray
// iterate through first
//  if the element at current index of first is not included in second
//  then push that element to differenceArray
// iterate through second
//  if the element at current index of second is not included in first
//  then push that element to differenceArray
// return differenceArray

function difference(first, second) {
  var differenceArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      differenceArray.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      differenceArray.push(second[i]);
    }
  }
  return differenceArray;
}

// define a function named difference
// with parameters first and second (both arrays)
// create an empty array and assign to variable differenceArray
// iterate through first
//  if the element at current index of first is not included in second
//  then push that element to differenceArray
// iterate through second
//  if the element at current index of second is not included in first
//  then push that element to differenceArray
// return differenceArray
