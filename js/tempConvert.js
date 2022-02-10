//create variable with fahrenheit value
let fahrenheit = 75
//create variable for celsius conversion
let convToCels = (fahrenheit - 32) * .5556
convToCels = Math.round(convToCels)
//create variable for kelvin conversion
let convToKel = (fahrenheit * 1.8) + 32
//create temperatue variable for desired temperature, much like
//desired language
let temperature = "c"
//creat conditions for converstion dependent on temperature 
//selection
if (temperature === "c") {
    console.log(`${fahrenheit} degrees Fahrenheit is ${convToCels} degrees Celsius`)
}
else if (temperature === "k"){
    console.log(`${fahrenheit} degrees Fahrenheit is ${convToKel} degrees Kelvin`)
}
//finish with else statement in the event temperature is not chosen
else {
    console.log("Please select the correct temperature")
}