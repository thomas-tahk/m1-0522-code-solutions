/* exported zip */
// define a function named zip
// with parameters first and second
// determine length of array that zip needs to return
//  by finding the lesser length between first and second
// create an empty array and assign it to zipArray
// push empty arrays to zipArray based on zipLength to serve as placeholders
// iterate through first and push its elements to corresponding locations in zipArray
// iterate through second and push its elements to corresponding locations in zipArray
// return zipArray

function zip(first, second) {
  var zipLength = Math.min(first.length, second.length);
  var zipArray = [];
  for (let i = 0; i < zipLength; i++) {
    zipArray.push([first[i], second[i]]);
  }
  return zipArray;
}

// define a function named zip
// with parameters first and second
// determine length of array that zip needs to return
//  by finding the lesser length between first and second using min method of Math object
// create an empty array and assign it to zipArray
// push an array of paired elements of first and second at current index to zipArray
// return zipArray
