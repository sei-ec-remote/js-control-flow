// temperature in Fahrenheit
let tempInFahrenheit = 70
// k is for Kelvin
let k = (tempInFahrenheit - 32) * (5/9) + 273.15
// This rounds it to 2 decimal places
k = parseFloat(k).toFixed(2)
// c is for Celsius
let c = (tempInFahrenheit - 32) * (5/9)
// This rounds it to 2 decimal places
c = parseFloat(c).toFixed(2)


console.log(`${tempInFahrenheit} degrees Fahrenheit is ${c} degrees Celsius`)
console.log(`${tempInFahrenheit} degrees Fahrenheit is ${k} degrees Kelvin`)


