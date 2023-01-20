const convertToCelsius = function(x) {
  let convert = ((x - 32) * (5/9));
  let temperature = Math.round(convert * 10) / 10;
  return temperature;
};

const convertToFahrenheit = function(x) {
  let convert = ((x * (9/5)) + 32)
  let temperature = Math.round(convert * 10) / 10;
  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
