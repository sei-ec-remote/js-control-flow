// ### larger.js
// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

// **Requirements**
// * Your program should maintain two variables
// * It should correctly identify which is larger and print that result

function findLargerNumber(firstNumber, secondNumber) {
    if (firstNumber === secondNumber) {
        console.log("no large number")
    } else if (firstNumber > secondNumber) {
        console.log(`The large number of ${firstNumber} and ${secondNumber} is ${firstNumber}`)
    } else {
        console.log(`The large number of ${firstNumber} and ${secondNumber} is ${secondNumber}`)
    }
}

findLargerNumber(234, 32)
