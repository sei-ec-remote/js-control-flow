//Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

//Obtained the unit conversions from : https://nineplanets.org/kids/temperature-conversion/#:~:text=The%20basic%20formula%20is%20%C2%B0,%2F9%20%2B%20273.15%20%3D%20K. 

//Obtained method to limit the number of decimals (toFixed())from https://www.geeksforgeeks.org/how-to-parse-float-with-two-decimal-places-in-javascript/ 

let fahrenheit
let newUnit

function tempConvert(fahrenheit, newUnit){
  let celsius = ((fahrenheit-32)*(5/9)).toFixed(2);
  let kelvin = (((fahrenheit-32)*(5/9))+273.15).toFixed(2);
  if(typeof fahrenheit === 'number' && (newUnit.toLowerCase() === 'c' || newUnit.toLowerCase() === 'k')){
    if(kelvin < 0){
      console.log('Sorry you have entered a temperature lower than absolute zero, which is.....absolute..ly...not....a....thing.....try again!')
    } else if(newUnit.toLowerCase() === 'c'){
      console.log(`${fahrenheit} degrees Farenheit is ${celsius} degrees Celcius`)
    } else if(newUnit.toLowerCase() === 'k'){
      console.log(`${fahrenheit} degrees Farenheit is ${kelvin} degrees Kelvin`)
      } 
  } else{
    console.log("Please only enter a number for Fahrenheit and 'c' for Celsius or 'k' for Kelvin for a new unit.")
  }
}

let myTemp = 451
let myUnit = 'k'

tempConvert(myTemp, myUnit)