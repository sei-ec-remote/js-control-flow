// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")
 
// **Requirements**
 
// - Your program should maintain two variables
// - It should correctly identify which is larger and print that result
 
let num1 = 5;
let num2 = 22;
 
if (num1 > num2) {
  console.log(`The larger number of ${num1} and ${num2} is ${num1}`);
} else if (num1 < num2) {
  console.log(`The larger number of ${num1} and ${num2} is ${num2}`);
} else {
  console.log("It's a tie you idiot, pick again!");
}
