let tempF = 60
let newTempScale = 'k'

tempC = 5*(tempF - 32)/9

if (newTempScale === 'c') {
    console.log(`${tempF} degrees Fahrenheit is ${tempC} Celsius`)
} else
if (newTempScale === 'k') {
    console.log(`${tempF} degrees Fahrenheit is ${tempC + 273.15} Kelvin`)
}