let tempFahrenheit = 75;
let tempType = 'k';

if (tempType === 'c') {
    console.log((tempFahrenheit - 32) * (5/9))
} else if (tempType === 'k') {
    console.log((tempFahrenheit - 32) * (5/9) + 273.15)
} else {
    console.log('Please try with a real temperature system!')
}