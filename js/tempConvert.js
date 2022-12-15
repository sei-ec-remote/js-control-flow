let fahrenheit = 90;
let indicator = 'c';

let celsius = (fahrenheit - 32) * .5556;
let kelvin = (fahrenheit + 459.67) * 5/9;

// if inidicator is c
// output X degrees Fahrenheit is Y degrees Celsius
// or output X degrees Fahrenheit is Y degrees Kelvin

if (indicator = 'c') {
    console.log(fahrenheit + ' ' + 'degrees Fahrenheit is ' + celsius + ' degrees Celcius')
} else {
    console.log(fahrenheit + ' ' + 'degrees Fahrenheit is ' + kelvin + ' degrees Kelvin')
}


