/* exported truncate */

function truncate(length, string) {
  var truncated = string.slice(0, length) + '...';
  return truncated;
}
