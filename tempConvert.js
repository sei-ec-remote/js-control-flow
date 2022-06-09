let fDegrees = 100;
let unit = 'c';
if (unit == 'c') {
    console.log (fDegrees, 'degrees Fahrenheit is', ((fDegrees - 32) * 5 / 9), 'Celcius')
} else if (unit == 'k') {
    console.log (fDegrees, 'degrees Fahrenheit is', ((fDegrees - 32) * 5 / 9 + 273.15), 'Kelvin')
} else {console.log('Select c or k unit')
}