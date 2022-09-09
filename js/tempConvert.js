let fahrenheit =  83
let conversion = "k"

if (conversion === "c") {
    let convertedC = ((fahrenheit - 32) * (5/9))
    console.log(fahrenheit + " degrees Fahrenheit is " + Math.floor(convertedC) + " degrees Celsius.")
} else if (conversion === "k") {
    let convertedK = ((fahrenheit -32) * (5/9) + 273.15)
    console.log(fahrenheit + " degrees Fahrenheit is " + Math.floor(convertedK) + " degrees Kelvin.")
}



