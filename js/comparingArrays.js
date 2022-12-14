// Arrays for testing
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

// Defining variables
let arrayA = arr1;
let arrayB = arr4;
let results = 0;

// Program to compare arrays
if(!(arrayA.length === arrayB.length)) {
    results = 0;
} else {
  for (let i = 0; i < arrayA.length; i++)
    if (!(arrayA[i] === arrayB[i])) {
      results = 0;
    } else {
      results += 1
    }
}

// Printing results of comparing array A and array B
console.log((results === arrayA.length) ? `Array A (${arrayA}) and Array B (${arrayB}) are equal.` : `Array A (${arrayA}) and Array B (${arrayB}) are NOT equal.` )