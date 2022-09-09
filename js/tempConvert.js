// tempConvert.js
// Write a program that converts a temperature from Fahrenheit to another temperature unit 
// indicated by a variable.

// Requirements

// Your program should store an integer (in Fahrenheit) in a variable.
// You should also have a variable holding either "k" or "c" indicating a conversion to 
// Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

function tempConversion(f, otherTemp){
    let tempType="Kelvin"
    let Y= (f -32) * .5556
    if(otherTemp==="c"){
        tempType="Celsius";
    } else{
        Y= Y + 273.15
    }
    return `${f} degrees Fahrenheit is ${Math.floor(Y)} degrees ${tempType}`
}
console.log(tempConversion(97, "k"))

