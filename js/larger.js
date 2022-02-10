// This program will read in two number variables using Node.js
//  and print which one is greater.
//
//

// Using Node.js to read in input for two numbers.
// Credit goes to online for showing me how to do this.
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your first number: ', function (firstNumber) {
    rl.question('Enter your second number: ', function (secondNumber) {
        if (parseInt(firstNumber) > parseInt(secondNumber)) {
            console.log(`${firstNumber} is the larger number`);
        } else {
            console.log(`${secondNumber} is the larger number`);
        }
        rl.close();
    });
});