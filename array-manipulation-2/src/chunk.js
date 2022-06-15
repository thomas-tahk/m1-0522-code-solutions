/* exported chunk */
function chunk(array, size) {
  var chunkArrays = [];
  for (let i = 0; i < array.length; i += size) {
    chunkArrays.push(array.slice(i, i + size));
  }
  return chunkArrays;
}
