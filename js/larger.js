// arger.js
// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

// Requirements

// Your program should maintain two variables
// It should correctly identify which is larger and print that result


const numbers = [1,2,3,4,5]
const num1 = [Math.floor(Math.random() * numbers.length)];
const num2 = [Math.floor(Math.random() * numbers.length)];
   if (num1 > num2) {
   console.log("The larger number of " + num1 + " and " + num2 + " is " + num1)
   } else if (num1 < num2) {
       console.log("The larger number of " + num1 + " and " + num2 + " is " + num2)
   }