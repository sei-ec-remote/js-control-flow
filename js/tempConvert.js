const tempF = 85
const tempC = (tempF - 32) * (5/9)
const tempK = ((((tempF - 32) * 5) / 9) + 273.15)



let choice = "c"

if (choice === "k") {
    console.log(`${tempF} degrees Fahrenheit is ${tempK} degrees Kelvin.`)
} else if (choice === "c") {
    console.log(`${tempF} degrees Fahrenheit is ${tempC} degrees Celsius.`)
}