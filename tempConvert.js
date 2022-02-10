//### tempConvert.js
//Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

//**Requirements**
//* Your program should store an integer (in Fahrenheit) in a variable.
//* You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
//* Convert from F to C or K based on the indicator variable.
//* The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

//answer

let tempF = 15;
let convert = 'c';
let newTemp;

if (convert === 'c'){
    newTemp = Math.floor((tempF - 32) * 5 / 9);
  console.log(`${tempF} degrees Fahrenheit is ${newTemp} degrees Celsius`);
} else if (convert === 'k'){
  newTemp = Math.floor((tempF - 32) * 5 / 9 + 273.15)
  console.log(`${tempF} degrees Fahrenheit is ${newTemp} degrees Kelvin`)
}