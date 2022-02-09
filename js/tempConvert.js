// converts temperature from fahrenheit to either celsius or kelvin


let temp = 0;
let unit = "k";

if (unit==="k") {
    temp=((temp-32)*5/9)+273.15;
}
else if (unit==="c") {
    temp=(temp-32)*5/9;
}

else {
  temp = "fix unit";
}
