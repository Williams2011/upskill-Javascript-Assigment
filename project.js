function fahrenheitToCelsius(fahrenheit) {
  var celsuis = ((fahrenheit - 32) * 5) / 9;
  return celsuis;
}
var temperatureFahrenheit = 77;
var temperatureToCelsius = fahrenheitToCelsius(temperatureFahrenheit);
console.log(temperatureToCelsius);

function calculateAverage(numbers) {
  var sum = 0;
  var count = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  var average = sum / count;
  return average;
}

var numbers = [4, 6, 8, 10];
var averageResult = calculateAverage(numbers);
console.log("The average is: " + averageResult);

// The Average is: Infinity//
