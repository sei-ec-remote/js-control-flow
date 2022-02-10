// This program will check two arrays to see if they contain the same items by
// checking to see if they contain same type, the same values and in the same 
// order.
//
//
let arr1 = [1,2,3,5];
let arr2 = [1,2,3,5,6];
let sameArrays = true;

// Checking size of arrays, types and each element
for (let i=0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i] || typeof(arr1[i]) != typeof(arr2[i])
    || arr1.length != arr2.length) {
        sameArrays = false;
        break;
    }
}

if (sameArrays) {
    console.log("Both arrays are the same!");
} else {
    console.log("The arrays are not the same.");
}