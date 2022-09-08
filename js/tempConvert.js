let fahrenTemp = 77
let kelvOrCels = "k"

let celsTemp = (fahrenTemp - 32) * 0.5556
let kelvTemp = celsTemp + 273.15

if (kelvOrCels === "k") {
    console.log(`${fahrenTemp} degrees Fahrenheit is ${kelvTemp} degrees Kelvin.`)
} else if (kelvOrCels === "c") {
    console.log(`${fahrenTemp} degrees Fahrenheit is ${celsTemp} degrees Celsius.`)
}