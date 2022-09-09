let tempF = 47
const tempC = Math.round((tempF - 32) * (5/9)*100)/100;
const tempK = Math.round((tempC + 273.15)*100)/100;

result = tempF + '\u00B0 Fahrenheit is ' + tempC + '\u00B0 Celsius and ' + tempK + '\u00B0 Kelvin.';

console.log(result);