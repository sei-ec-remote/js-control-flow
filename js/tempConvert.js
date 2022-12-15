let tempInFahrenheit = 65

let tempIndicator = "c"

if (tempIndicator === "k") {
    let tempInKelvin = (tempInFahrenheit - 32) * (5/9) + 273.15
    console.log(`${tempInFahrenheit} degrees in Fahrenheit is ${tempInKelvin} degrees in Kelvin`)
} else if (tempIndicator === "c") {
    let tempInCelsius = (tempInFahrenheit - 32) * (5/9)
    console.log(`${tempInFahrenheit} degrees in Fahrenheit is ${tempInCelsius} degrees in Celsius`)
} else {
    console.log(`Please select a temperature scale between Celsius or Kelvin`)
}

