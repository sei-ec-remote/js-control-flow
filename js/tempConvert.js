let tempF = 87
let tempC = (tempF-32)*(5/9)
console.log(`${tempF} degrees Fahrenheit is ${tempC} degrees Celsius`)
if (tempC===100) {
    console.log("Watch yourself! That's boiling!")
} else if (tempC===0) {
    console.log("Bundle up, it's freezing!")
}