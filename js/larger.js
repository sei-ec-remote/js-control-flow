// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

// Requirements

// Your program should maintain two variables
// It should correctly identify which is larger and print that result

let num1 = 1
let num2 = 3

function larger(num1, num2){
  if(typeof num1 === 'number' && typeof num2 === 'number'){
    if(num1 > num2){
      console.log(`The first number is the larger number! ${num1} > ${num2}.`)
    } else if(num1 < num2){
      console.log(`The second number is the larger number! ${num2} > ${num1}`)
    } else if(num1 === num2){
      console.log(`These two numbers are equal! ${num1} = ${num2}`)  
    }
  }
  else{console.log("Please only enter numbers!")}
}

larger(num1, num2)