// Comparing Arrays
// Because Arrays are reference variables, they actually point to locations in memory. 
// As such, even if two arrays contain exactly the same items you will never be able to use normal comparison to check equality:

// let a = [1,2,3];
// let b = [1,2,3];
// console.log(a === b);  // This will never be true

// Using any of the loop constructs we've learned, write a program that will check two arrays for equality. 
// You may consider two arrays to be "equal" if and only if they contain exactly the same number of items 
// and each item is the same type, same value, and in the same order in both arrays. 
// Some arrays are provided below for your testing purposes. 
// Be sure to test with different combinations to make sure your script fully works:

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6,7,8,8,9];

let checkEquality = null;

// Check that the two arrays have the same number of items

if (arr1.length === arr2.length) {
    
    for (i = 0; i < arr1.length; i++ ){

        for (i = 0; i < arr2.length; i++ ) {
    
            if (arr1[i] === arr2[i]) {

                checkEquality = true
            }
            else {

                checkEquality = false

                break; // As soon as one item in the array is found to be inequivalent, stop checking for equality
            }

        }
        break;
    }
    
}

else {

    console.log('The two arrays do not have the same number of items.');

}

// Prints the results to the console.
console.log(`Equality in type, value and array length is ${checkEquality}.`)
