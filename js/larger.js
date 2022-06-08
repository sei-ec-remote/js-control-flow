// Enter two numbers in the variables 
let numOne = 0; //change number to test program
let numTwo = 0; //change number to test program

function biggerNum(numOne, numTwo) {
  if (numOne > numTwo) {
    console.log(`${numOne} is bigger than ${numTwo}`);
  } else if (numTwo > numOne) {
    console.log(`${numTwo} is bigger than ${numOne}`);
  } else alert("Please try again and type two different numbers");
}

biggerNum(numOne, numTwo);
