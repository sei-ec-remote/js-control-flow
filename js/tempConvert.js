// Declare farenheight variable
let fTemp = 0 

// Declare new temp variable to store the converted temp
let newTemp

// Declare variable to slect wich temp scale to convert to
let tScale = 'c'

// Determine the scale to convert to then convert 

if (tScale === 'c'){
    newTemp = (fTemp - 32)/1.8
    console.log(fTemp + ' degrees Fahrenheit is '+ newTemp +' degrees Celsius')
} else if (tScale === 'k'){
    newTemp = ((fTemp - 32)/1.8) + 273.15
    console.log(fTemp + ' degrees Fahrenheit is '+ newTemp +' degrees Kelvin')
}

// The requirments didn't specify to round so I did not do that