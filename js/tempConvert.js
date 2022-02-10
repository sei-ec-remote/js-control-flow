// define Farenheit and assign a number
let tempF = 40

// define Celcius and convert it by taking tempF, substracting it from -32 and multiplying it with 5/9.
// round the result
function tempC (tempF){
    return Math.round((tempF -32) * .6)
}

// print the result in a string
console.log(tempF + " degrees Fahrenheit is " + tempC(tempF) + " degrees Celsius/Kelvin.")
