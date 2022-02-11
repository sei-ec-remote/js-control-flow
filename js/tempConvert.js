const tempF = 50
const whichTempScale = "c"

if (whichTempScale === "c") {
    let tempConvert = Math.round((tempF - 32) * .5556)
    console.log(`${tempF} degrees Fahrenheit is ${tempConvert} degrees Celsius.`)
} else if (whichTempScale === "k") {
    let tempConvert = ((5 / 9) * (tempF + 459.67))
    console.log(`${tempF} degrees Fahrenheit is ${tempConvert} Kelvin.`)
} else {
    console.log(`${whichTempScale} is not a recognized temperature scale.`)
}