let firstNumber = 5
let secondNumber = 4

if (firstNumber > secondNumber) {
    console.log(`The larger number of ${firstNumber} and ${secondNumber} is ${firstNumber}.`)
} else if (secondNumber > firstNumber) {
    console.log(`The larger number of ${firstNumber} and ${secondNumber} is ${secondNumber}.`)
} else if (firstNumber == secondNumber) {
    console.log(`There is no larger number. ${firstNumber} and ${secondNumber} are equal.`)
}