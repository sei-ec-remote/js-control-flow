const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];
// creates a function
function compArray(firstArray, secondArray){
    let arrayCompare = null;
    // compares length first before proceeding with more code
if(firstArray.length === secondArray.length) {
    // i starts at the first part of array and ends on the last part
     for(let i = 0; i < firstArray.length; i++) {
       if (firstArray[i] === secondArray[i]) {
           arrayCompare++;
           // if the I is equall to the length 
           if ( arrayCompare === firstArray.length) {
               console.log("The arrays are equal")
           }
       } else {
           console.log("The arrays are not equal")
           // stops the code from proceeding 
           break
       }
    } 
} else {
    console.log("The arrays are not equal")
}
}

compArray(arr1, arr2)