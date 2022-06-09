

let degreesFahrenheit = Math.floor(Math.random() * 100)
let unit = 'K'

if (unit === 'C') {
    console.log(degreesFahrenheit, "degrees Fahrenheit is", (degreesFahrenheit - 32) * (5/9), "degrees Celsius.")
} else if (unit === 'K') {
    console.log(degreesFahrenheit, "degrees Fahrenheit is", (degreesFahrenheit - 32) * (5/9) + 273.15, "degrees Kelvin.")
}