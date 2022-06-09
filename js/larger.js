// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")
// Requirements
// Your program should maintain two variables
// It should correctly identify which is larger and print that result

const numberOne = Math.floor(Math.random() * 101)
const numberTwo = Math.floor(Math.random() * 101)

if (numberOne > numberTwo) {
    console.log(numberOne)
} else {
    console.log(numberTwo)
}