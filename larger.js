function compareNumbers(numOne, numTwo) {
    if (numOne === numTwo) {
        console.log('the numbers are equal')
    } else if (numOne > numTwo) {
        console.log('The larger number of', numOne, 'and', numTwo, 'is', numOne)
    } else {
        console.log('The larger number of', numTwo, 'and', numOne, 'is', numTwo)
    }
}
compareNumbers(5, 9)