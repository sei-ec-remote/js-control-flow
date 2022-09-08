
//arrays for testing
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

//create arrays to be compared
let array1 = arr1;
let array2 = arr4;


//I'm going to create an array that will track the equality of the elements of two arrays. This is maybe not the best solution, but it prevents me from needing to break out of a loop while still having a record of where elements are equal. The array will consist of 0's (elements at an index are not equal) and  1's (they were =)
let arraysEqual = [];
//a separate boolean to track whether lengths are the same 
let lengthsEqual = null;

//check if the arrays have the same length and set the length boolean accordingly. The code also won't bother checking the elements if the lengths are not equal
if (!(array1.length === array2.length)) {
    lengthsEqual = false;
    console.log("The two arrays are not equal");
} else {
    lengthsEqual = true;
    for (let i = 0; i < array1.length; i++) {
        arraysEqual[i] = (array1[i] === array2[i] ? 1 : 0)
    }
    //print whether arrays are = . I will use a ternary operator which checks the equality array for any 0's. If they're aren't any than the arrays should be the same since we already checked the lengths. This should also give that two empty or undefined arrays are equal, which I think is an ok enough convention but I can add checks for that later if needed
    console.log(arraysEqual.includes(0) ? "The two arrays are not equal" : "The two arrays are equal")
}

