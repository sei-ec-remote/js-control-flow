//Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.


const fConverter = (fTemp, convertToCelsius) => {

    let newTemp
    let newTempType

    //function to convert from Fahrenheit to Celcius
    const convertToC = (fTemp) => {
        return((fTemp - 32) * 0.5556 )
    };
     //function to convert from Fahrenheit to Kelvin
    const convertToK = (fTemp) => {
        return((fTemp - 32) * 0.5556 + 273.15)
    };

    convertToCelsius ? newTemp = convertToC(fTemp) : newTemp = convertToK(fTemp);
    convertToCelsius ? newTempType = 'Celcius': newTempType = 'Kelvin';

    console.log(`${fTemp} degrees Fahrenheit is ${newTemp} degrees ${newTempType}`)
}

fConverter(32, true)

fConverter(32,false)

fConverter(100, true)

fConverter(100,false)

fConverter(20, true)

fConverter(20,false)