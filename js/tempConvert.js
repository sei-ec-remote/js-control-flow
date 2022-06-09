const degreesFahrenheit = 65;
const tempType = "k"

function convertToOther() {
    if(tempType === "k") {
        let degreesKelvin = (degreesFahrenheit-32)*(5/9)+273.15;
        console.log(degreesFahrenheit+" degrees Fahrenheit is "+degreesKelvin+" degrees Kelvin");
    }
    if(tempType === "c") {
        let  degreesCelsius = (degreesFahrenheit-32)*(5/9);
        console.log(degreesFahrenheit+" degrees Fahrenheit is "+degreesCelsius+" degrees Celsius");
    }
}

convertToOther();