//Done

let farenheitInput = 32 //put in a Farenheit temperature here

let conversionType = 'c' //put a c or k here in between ''

let celsiusTemp = Math.round ( ((farenheitInput - 32) * 5 / 9) * 100) / 100
let kelvinTemp  = Math.round ( ((farenheitInput + 459.67) * (5/9)) * 100) / 100


if (conversionType === 'c'){
    console.log(farenheitInput + " degrees Fahrenheit is " + celsiusTemp + " degrees Celsius")
} else if (conversionType === 'k') {
    console.log(farenheitInput + " degrees Fahrenheit is " + kelvinTemp  + " degrees Kelvin")
} else {}