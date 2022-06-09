// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

// Requirements

// Your program should store an integer (in Fahrenheit) in a variable.
// You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

let Fahrenheit = 80 //starting varible
let c //Holder for Celsius becuase it was asked for.
let k //holder for  becuase it was asked for.
let indicator //indicate if we are converting c or k.

if (Math.floor(Math.random()*2) === 0) 
    indicator = 'c'
else 
    indicator = 'k'

if (indicator === 'c') {
    c = (Fahrenheit - 32) * .5556
    c = Math.round(c)
    console.log(`${Fahrenheit} degrees Fahrenheit is ${c} degrees Celsius`)
}
else { 
    k = (Fahrenheit + 459.67) * .5556
    k = Math.round(k)
    console.log(`${Fahrenheit} degrees Fahrenheit is ${k} degrees Kelvin`)
}
