// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

// Requirements

// Your program should maintain two variables
// It should correctly identify which is larger and print that result

const larger = (num1, num2) => {
    num1>num2 ? console.log(num1) : console.log(num2)
}


//TESTING BELOW THIS LINE
larger(100, 121)

larger(4, -2)