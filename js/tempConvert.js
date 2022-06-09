// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

// Requirements

// Your program should store an integer(in Fahrenheit) in a variable.
// You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

// To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by. 5556(or 5 / 9).
// The Formula for the conversion is degrees Celsius times 9 divided by 5 plus 32.

let degrees = 25
let tempName = "c"

if (tempName === "f" || tempName === "F") {
    let newTemp = (degrees-32) * 5/9
    console.log( degrees, "degrees Fahrenheit is", newTemp, "degrees Celsius/Kelvin")
} else {
    let newTemp = (degrees * 9/5) + 32
    console.log(degrees, "degrees Celsius/Kelvin is", newTemp, "degrees Fahrenheit")
}