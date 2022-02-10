let fahrenheit = 55;
let celsius = Math.round(((fahrenheit - 32) * 5) / 9)
let kelvin = Math.round((fahrenheit + 459.67) * (5/9))

console.log (`When it is ${fahrenheit} degrees fahrenheit, that is equivalent to ${celsius} degrees celsius and ${kelvin} kelvins, rounding the respective temperatures to the nearest integer.`)
