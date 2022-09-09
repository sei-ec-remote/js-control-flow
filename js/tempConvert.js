let temp = prompt("Enter a temperature in Farhrenheit");

function tempConvert(){

let kelvin = Math.floor(((temp -32) * 5)/9 + 273.15)
let celsius = Math.floor((5/9)*(temp - 32));

alert(`${temp} degrees Fahrenheit is ${kelvin} degrees Kelvin`);


alert(`${temp} degrees Fahrenheit is ${celsius} degrees Celsius`);
}
tempConvert();