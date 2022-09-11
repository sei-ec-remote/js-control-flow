let numberOne = 7
let numberTwo = 3

const largerNumber = (num1, num2) => {
    if (num1 > num2) {
        console.log(`The larger number of ${num1} and ${num2} is ${num1}`)
    } else {
        console.log(`The larger number of ${num1} and ${num2} is ${num2}`)
    }
}
//Call Function to check numbers
largerNumber(numberOne, numberTwo)