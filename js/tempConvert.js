let tempFahrenheit = 33

//'c' for Celsius or 'k' for Kelvin
let tempConversionUnit = 'k'

if(tempConversionUnit === 'c')
{
    console.log(`${tempFahrenheit} degrees Fahrenheit is ${(tempFahrenheit - 32) * (5/9)} Celsius`)
}
else if(tempConversionUnit === 'k')
{
    console.log(`${tempFahrenheit} degrees Fahrenheit is ${(tempFahrenheit - 32) * (5/9) + 273.15} Kelvin`)
}