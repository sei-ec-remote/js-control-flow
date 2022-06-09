let tempF = 72;

let tempC = (tempF - 32) * 5/9

tempC * 10 % 10 === 0 ?  console.log(`${tempF} Fahrenheit is ${tempC} Celsius`) : 
console.log(`${tempF} Fahrenheit is ${Math.round(tempC)}-ish Celsius`)

