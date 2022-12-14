let fahrenheit = 70;
let tempUnit = 'k';

if (tempUnit === 'c') {
  let celcius = (fahrenheit - 32) * (5 / 9);
  console.log(`${fahrenheit} degrees Fahrenheit is ${celcius} degrees Celcius`);
} else if (tempUnit === 'k') {
  let kelvin = (((fahrenheit - 32) * (5 / 9)) + 273.15);
  console.log(`${fahrenheit} degrees Fahrenheit is ${kelvin} degrees Kelvin`);
} else {
  console.log('Invalid input');
}

