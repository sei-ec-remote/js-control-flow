// tempConvert.js
// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

// Requirements

// Your program should store an integer (in Fahrenheit) in a variable.
// You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

let tempInF = 120;
let targetUnit = "c";

let targetTemp = (tempInF - 32) * 5 / 9 + (targetUnit === "c" ? 0 : 273.15);
let targetUnitName = (targetUnit === "c" ? "Celsius" : "Kelvin");

console.log(`${tempInF} degrees Fahrenheit is ${targetTemp} degrees ${targetUnitName}.`);