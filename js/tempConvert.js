const fahrenheitTemp = 38;
const conversionUnit = "c";

let convertedTemp = null
convertedTemp = (conversionUnit === "c" ? ((fahrenheitTemp - 32)*.5556) : ((((fahrenheitTemp - 32)*5)/9)+273.15));

let newUnit = null
newUnit = (conversionUnit === "c" ? "Celsius" : "Kelvin");

console.log (`${fahrenheitTemp} degrees Fahrenheit is ${convertedTemp} degrees ${newUnit}`);