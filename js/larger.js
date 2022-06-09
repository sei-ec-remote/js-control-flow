// ### larger.js
// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

// **Requirements**
// * Your program should maintain two variables
// * It should correctly identify which is larger and print that result

function greaterNumber(num1, num2) {
    let number1 = num1;
    let number2 = num2;
    if (number1 > number2) {
        console.log('The larger number of ' + number1 + ' and ' + number2 + ' is ' + number1);
    }
    else if (number2 > number) {
        console.log(`The larger number of ${number2} and ${number1} is ${number2}`);
    }
    else {
        console.log('Looks like both numbers are equal.')
    }
}

greaterNumber(5, 3)