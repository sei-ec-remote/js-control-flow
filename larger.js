//### larger.js
//Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

//**Requirements**
//* Your program should maintain two variables
//* It should correctly identify which is larger and print that result

// answer

let num1 = 9
let num2 = 7

if (num1 === num2){
    console.log('The numbers given are equal.')
} else if (num1 > num2){
    console.log(`The larger number of ${num1} and ${num2} is ${num1}`)
} else if (num1 < num2){
    console.log(`The larger number of ${num1} and ${num2} is ${num2}`)
}