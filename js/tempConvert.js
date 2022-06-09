// ### tempConvert.js
// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

// **Requirements**
// * Your program should store an integer (in Fahrenheit) in a variable.
// * You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// * Convert from F to C or K based on the indicator variable.
// * The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

function celToFarenheit(celsius) {
    let temp = celsius;
    let cToF = Math.ceil(temp * 9 / 5 + 32);
    console.log(temp + ' degrees Celsius/Kelvin is ' + cToF + ' degrees Fahrenheit!');
}

function farToCelsius(fahrenheit) {
    let temp = fahrenheit;
    let fToC = Math.ceil((temp - 32) * 5 / 9);
    console.log(`${temp}\xB0F is ${fToC}\xB0C/K!`);
}

celToFarenheit(-15)
farToCelsius(72)