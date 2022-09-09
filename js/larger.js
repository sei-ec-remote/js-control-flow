// larger.js
// Write a program that reads two Number variables and prints which one is greater. 
// (e.g. "The larger number of 7 and 3 is 7")

// Requirements

// Your program should maintain two variables
// It should correctly identify which is larger and print that result

function larger(number1, number2){
    let biggest=Math.max(number1, number2)
    return `The larger number of ${number1} and ${number2} is ${biggest}`
}
console.log(larger(2, 8))
console.log(larger(4, 10))
console.log(larger(7, 1))