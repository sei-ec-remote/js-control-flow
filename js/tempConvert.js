// This program will covert a temperature from Fahrenheit to another
// temperature unit specified by a k or c in a variable.  If the variable
// is a k it will convert from Farhrenheit to Kelvin.  If it is a c then 
// will convert from Fahrenheit to Celsius.

const fahrenheit = 32;
const tempUnit = 'k';
let tempOutput = 0;

if (tempUnit === 'c' || tempUnit === 'C') {
    // Covert from Fahrenheit to Celsius
    tempOutput = (fahrenheit - 32) * 5 / 9;
    console.log("%f degrees fahrenheit is %f degrees Celsius", fahrenheit, tempOutput.toFixed(2));
} else if ( tempUnit === 'k' || tempUnit === 'K') {
    // Covert from Fahrenheit to Kelvin
    tempOutput = 273.5 + ((fahrenheit - 32.0) * (5.0/9.0));
    console.log("%f degrees fahrenheit is %f degrees Kelvin", fahrenheit, tempOutput.toFixed(2));
}

