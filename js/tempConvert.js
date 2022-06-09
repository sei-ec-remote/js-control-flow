// ### tempConvert.js
// Write a program that converts a temperature from Fahrenheit to another 
//temperature unit indicated by a variable.

// **Requirements**
// * Your program should store an integer (in Fahrenheit) in a variable.
// * You should also have a variable holding either "k" or "c" indicating a 
//conversion to Kelvin or Celsius, respectively.
// * Convert from F to C or K based on the indicator variable.
// * The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

const tempFahrenheit = 212;
const newTempScale = "f";
let tempKelvin = null;
let tempCelsius = null;

if (newTempScale === "k") {
    tempKelvin = (((tempFahrenheit - 32) * 5) / 9) + 273.15;
    console.log(tempFahrenheit + " degrees Fahrenheit is " + tempKelvin + " degrees Kelvin")
} else if (newTempScale === "c") {
    tempCelsius = (tempFahrenheit - 32) / 1.8
    console.log(tempFahrenheit + " degrees Fahrenheit is " + tempCelsius + " degrees Celsius")
} else {
    console.log("Please input either c for Celsius, or k for Kelvin conversion")
}