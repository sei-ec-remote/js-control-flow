
//### larger.js
//Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

//**Requirements**
//* Your program should maintain two variables
//* It should correctly identify which is larger and print that result

//let variableOne = number (1,10)

//let variableTwo = number (1,10)

//function number (min, max) {
   // let randomVariable = Math.floor(Math.random() * (max-min + 1) + min);
//}

//let (randomVariable >
 //number ()

 const numbers = [2, 3, 4, 5, 6]

const variableOne = [Math.floor(Math.random() * numbers.length)]
const variableTwo = [Math.floor(Math.random() * numbers.length)]
if (variableOne > variableTwo) {
    console.log("The larger number of " + variableOne + " and " + variableTwo + " is " + variableOne)
} else if (variableTwo < variableOne){
    console.log (" The larger number of " + variableOne + " and " + variableTwo + " is " + variableTwo)
}


//console.log("The larger number of " + variableOne + " and " + variableTwo + " is " +  )