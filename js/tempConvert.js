let temp = 75;
let scale = 'k';

//Conversion Function
const convertTemp = (temp, scale) => {
    let tempConverted
    if (scale === 'c') {
        // (32°F − 32) × 5/9 = 0°C
        tempConverted = (temp - 32) * (5/9)
        console.log(`${temp} degrees Fahrenheit is ${Math.round(tempConverted)} degrees Celsius`)
    } else if (scale === 'k'){
        //(32°F − 32) × 5/9 + 273.15 = 273.15K
        tempConverted = (temp - 32) * (5/9) + 273.15
        console.log(`${temp} degrees Fahrenheit is ${Math.round(tempConverted)} degrees Kelvin`)
    } else {
        console.log('Scale unknown, please enter c or k')
    }
}
//Call function to convert
convertTemp(temp, scale)