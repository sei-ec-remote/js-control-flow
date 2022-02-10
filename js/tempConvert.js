//make varibles for f and c
// find the formula for f to c
// create a function to calc the value
//console a message to print the conversion
function fahCel(fahrenheit) {
    const fahTemp = fahrenheit;
    const celTemp = (fahTemp - 32) * .5556;
    console.log(fahTemp + ' is ' + celTemp)
}
fahCel(80)