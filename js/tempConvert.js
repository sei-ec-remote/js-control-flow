//let Fahrenheit = 75;
//let Celsius = Fahrenheit - 32;

//console.log(`${Fahrenheit} degrees Fahrenheit is ${Celsius} degrees Celsius`);

let Fahrenheit = 75;
let tempUnit = "C";

if (tempUnit === "C") {
    Celsius = (Fahrenheit- 32) * 5/9;
    console.log(`${Fahrenheit} degrees Fahrenheit is ${Celsius} degrees Celsius`);  
} else if (tempUnit === "K") {
    Kelvin = ((Fahrenheit - 32) * 5/9 + 273.15);
    console.log(`${Fahrenheit} degrees Fahrenheit is ${Kelvin} degrees Celsius`);
} else {
    console.log("Enter a valid temperature unit.");
}

