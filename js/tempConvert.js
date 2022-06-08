function fahrenheitConvert(temp, unit){
    switch (true){
        case (unit == "c"):
            return temp.toString() + " degrees Fahrenheight is " + ((temp - 32) * .5556) + " degrees Celsius";
            break;

        case (unit == "k"):
            return temp.toString() + " degrees Fahrenheight is " + (((temp - 32) * .5556) - 273.15) + " degrees Kelvin";
            break;
        default:
            return "error";
    }
}

console.log(fahrenheitConvert(50, 'k'));