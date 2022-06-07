/* PUT FAHRENHEIT TEMP, C OR K*/ 
function tempConvert(temp, type) {
    let newTemp = "";
    if (type === "c" || type === "C") {
        newTemp = (temp - 32) * (5/9);
        console.log(temp + " degrees Fahrenheit is " + newTemp + " degrees Celsius.");
    } else if (type === "k" || type === "K") {
        newTemp = (temp - 32) * (5/9) + 273.15;
        console.log(temp + " degrees Fahrenheit is " + newTemp + " degrees Kelvin.");
    } else {
        console.log("Invalid entry. Please enter C or K.");
    }
}

tempConvert(100, "K");