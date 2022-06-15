let tempfarenheit = 30 
let temp = "C"


if (temp === "C"){
    console.log("The temperature is " + (Math.round((tempfarenheit - 32) *5/9)) + " in Celsius.")
} else if ( temp === "k"){
    console.log ("The temperature in Kelvin is " + (Math.round((tempfarenheit -32) * 5/9 + 273.15)))
}  