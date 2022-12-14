// Defining two number variables
// Set variables to random number between 0 and 100
const x = Math.floor(Math.random()*100);
const y = Math.floor(Math.random()*100);

// Ternary operator testing which number is larger
let largerNumber = (x > y) ? x : y;

// Printing results
console.log(`The larger number of ${x} and ${y} is ${largerNumber}`);