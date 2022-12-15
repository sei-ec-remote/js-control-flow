// tempConvert.js
// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

// Requirements
// * Your program should store an integer (in Fahrenheit) in a variable.
// * You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// * Convert from F to C or K based on the indicator variable.
// * The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"


let fahrenheit = [Math.floor(Math.random() * 120), "F"];

let celsius = [null, "c"];

let kelvin = [null, "k"]

// Equation for converting fahrenheit into celsius
// (32°F − 32) × 5/9 = 0°C

if (celsius[1] === "c") {

    celsius[0] = (fahrenheit[0] - 32) * 5/9

    celsius[0] = Math.round(celsius[0] * 100) / 100

    console.log(`${fahrenheit[0]} degrees Fahrenheit is ${celsius[0]} degrees Celsius`)
}

// Equation
// K = (°F + 459.67)/1.8

if ( kelvin[1] === "k" ) {

    kelvin[0] = (fahrenheit[0] + 459.67) / 1.8

    kelvin[0] = Math.round(kelvin[0] * 100) / 100

    console.log(`${fahrenheit[0]} degrees Fahrenheit is ${kelvin[0]} degrees Kelvin`)
}
