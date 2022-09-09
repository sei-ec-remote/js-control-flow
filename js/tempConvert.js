let tempFahrenheit = 69
let tempCelsius = Math.floor(tempFahrenheit - 32 * (5/9))
let tempKelvin = Math.floor(tempFahrenheit - 32 * (5/9) + 275.15)

console.log(`${tempFahrenheit} degrees Fahrenheit is ${tempCelsius} degrees Celsius\
 and ${tempKelvin} degrees Kelvin`)