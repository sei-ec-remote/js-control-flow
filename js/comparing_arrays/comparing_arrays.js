





function compareArr(x,y) {
    firstArr = x.join(",")
    secondArr = y.join(",")
    if (firstArr === secondArr) {
        console.log("arrays are equal")
    } else {console.log("arrays are not equal")}
    return x,y
}


const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];
const arr5 = [1, 'a', 3,'s',7,10,0]
const arr6 = [1, 'a', 3,'s',7,10,1]
const arr7 = [1, 'a', 3,'s',7,10,1]


compareArr(arr5,arr7)



// Using any of the loop constructs we've learned, write a program that will check two arrays for equality. You may consider two arrays to be "equal" if and only if they contain exactly the same number of items and each item is the same type, same value, and in the same order in both arrays. Some arrays are provided below for your testing purposes. Be sure to test with different combinations to make sure your script fully works:

// ```javascript
// const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
// const arr4 = [0, 2, 4, 6];