// Defining Fahrentheit temperature and the unit to convert to
const fahrenheitTemp = 38;
const conversionUnit = "c";

// Converting temperature based on conversion unit
let convertedTemp = null
convertedTemp = (conversionUnit === "c" ? ((fahrenheitTemp - 32)*.5556) : ((((fahrenheitTemp - 32)*5)/9)+273.15));

// Defining unit string based on conversion unit variable
let newUnit = null
newUnit = (conversionUnit === "c" ? "Celsius" : "Kelvin");

// Printing conversion results
console.log (`${fahrenheitTemp} degrees Fahrenheit is ${convertedTemp} degrees ${newUnit}`);