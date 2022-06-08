let tempFahrenheit = 75;
let tempType = 'c';

if (tempType === 'c') {
    tempType = 'Celsius';
    console.log(`${tempFahrenheit} degrees Fahrenheit is ${((tempFahrenheit - 32) * (5/9))} degrees ${tempType}.`)
} else if (tempType === 'k') {
    tempType = 'Kelvin';
    console.log(`${tempFahrenheit} degrees Fahrenheit is ${((tempFahrenheit - 32) * (5/9) + 273.15)} degrees ${tempType}.`)
} else {
    console.log('Please try with a real temperature system!')
}

//X degrees Fahrenheit is Y degrees Celsius/Kelvin"
