// ### larger.js
// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

// **Requirements**
// * Your program should maintain two variables
// * It should correctly identify which is larger and print that result

function greaterNumber(num1, num2) {
    if (num1 > num2) {
        console.log('The larger number of ' + num1 + ' and ' + num2 + ' is ' + num1);
    }
    else if (number2 > number) {
        console.log(`The larger number of ${num2} and ${num1} is ${num2}`);
    }
    else {
        console.log('Looks like both numbers are equal.')
    }
}

greaterNumber(5, 3)