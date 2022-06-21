/* exported intersection */

function intersection(first, second) {
  var intersectionArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i]) && !intersectionArray.includes(first[i])) {
      intersectionArray.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i]) && !intersectionArray.includes(second[i])) {
      intersectionArray.push(second[i]);
    }
  }
  return intersectionArray;
}
