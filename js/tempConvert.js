// provide a temperature in farenheight

let faren = 50
let scale = "k"

// convert temperature to celcius
if (scale === "c") {
    console.log((faren - 32) * (5 / 9))
} 
// convert to kelvin
else if (scale === "k") {
    console.log(((faren - 32) * (5 / 9) + 273.15))
}