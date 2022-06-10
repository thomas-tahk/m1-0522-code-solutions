/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var addedArray = [];
  for (let i = 0; i < words.length; i++) {
    addedArray.push(words[i] + suffix);
  }
  return addedArray;
}
