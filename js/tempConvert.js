const tempF = 32;
const convert="f";
if(convert.toLowerCase()==="k"){
    const tempK=((tempF-32)*5)/9+273.15;
    console.log(tempF+" degrees Fahrenheit is "+tempK+" degrees Kelvin");
}else if(convert.toLowerCase()==="c"){
    const tempC=((tempF-32)*5)/9;
    console.log(tempF+" degrees Fahrenheit is "+tempC+" degree Celsius");
}else{
    console.log("Not a valid conversion variable!")
}