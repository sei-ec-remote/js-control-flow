// ### Comparing Arrays
// Because Arrays are reference variables, they actually point to locations in memory. 
//As such, even if two arrays contain exactly the same items you will never be able to 
//use normal comparison to check equality:

// javascript
// let a = [1,2,3];
// let b = [1,2,3];
// console.log(a === b);  // This will never be true


// Using any of the loop constructs we've learned, write a program that will check two arrays for equality. 
//You may consider two arrays to be "equal" if and only if they contain exactly the same number of items 
//and each item is the same type, same value, and in the same order in both arrays. Some arrays are 
//provided below for your testing purposes. Be sure to test with different combinations to make sure 
//your script fully works:

// javascript
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

//variables to hold two arrays to be compared
const arrayToBeCompared1 = arr1;
const arrayToBeCompared2 = arr3;
let array1Contents = null;
let array2Contents = null;
let differences = 0;

//quickly sort out arrays that are different lengths
if (arrayToBeCompared1.length === arrayToBeCompared2.length) {
    //use a for loop to print out contents of each array
    for (let i = 0; i < arrayToBeCompared1.length; i++) {
        if (arrayToBeCompared1[i] !== arrayToBeCompared2[i]) {
            differences += 1
        }
    }
    if (differences === 0) {
        console.log("This two arrays are equal")
    } else {
        console.log("These two arrays are different")
    }

} else {
    console.log("These arrays are not equal")
}

