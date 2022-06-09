// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

// **Requirements**
// * Your program should store an integer (in Fahrenheit) in a variable.
// * You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// * Convert from F to C or K based on the indicator variable.
// * The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

// CODE BELOW:

let degreesF = 10;
// the variable in each equation


const degreesC = ((degreesF - 32) * (5/9));
    console.log(`${degreesF} degrees Fahrenheit is ${degreesC} degrees Celsius`)

const degreesK = (((degreesF - 32) * (5/9)) + 273.15);
    console.log(`${degreesF} degrees Fahrenheit is ${degreesK} degrees Kelvin`)


// Formula reference: 
// Fahrenheit to Celcius: C = (F-32) (5/9)
// Fahrenheit to Kelvin: K = (F-32) (5/9) + 273.15
