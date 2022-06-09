function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'Fahrenheit is ' + fToCel + 'Celsius.';
    console.log(message);
} 
fToC(0);
