/* exported sumAll */
function sumAll(numbers) {
  var numberSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    numberSum += numbers[i];
  }
  return numberSum;
}
