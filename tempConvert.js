
// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.
// * Your program should store an integer (in Fahrenheit) in a variable.
// * You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// * Convert from F to C or K based on the indicator variable.
// * The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

//const otherTemp = 'C'
//let tempInFahrenheit = 70
//if the other temp is C we want it to convert F to C
//output "X degrees Fahrenheit is Y degrees Celsius"
//if other temp is K we want to convert other temp to K 
//want to output X degrees Fahrenheit is Y degrees Celsius/Kelvin"
// 2 if statment
//(°F − 32) × 5/9 = 0°C
//if other temp is = c 



const otherTemp = "K"
let tempInF = 70
let tempInC = (tempInF - 32) * 5/9
if (otherTemp === "C") {
    console.log(tempInC)
} 
if (otherTemp === "K") {
  let tempInK = (tempInC) + 273.15;
   console.log(tempInK)
}