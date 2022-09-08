// Declare variables
let number1 = 0
let number2 = 0

// Compare numbers and print the assesment
// I added a tie case because if they are the same there is no larger number
if (number1 === number2){
    console.log('There is no larger number between ' + number1 + ' and ' + number2 + '. They are equal.')
} else if (number1 > number2){
    console.log('The larger number of ' + number1 + ' and ' + number2 + ' is ' + number1 + '.')
} else {
    console.log('The larger number of ' + number1 + ' and ' + number2 + ' is ' + number2 + '.')
} 
