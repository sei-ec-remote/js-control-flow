// Because Arrays are reference variables, they actually point to locations in memory.As such, even if two arrays contain exactly the same items you will never be able to use normal comparison to check equality:

// let a = [1, 2, 3];
// let b = [1, 2, 3];
// console.log(a === b);  // This will never be true

// Using any of the loop constructs we've learned, write a program that will check two arrays for equality. You may consider two arrays to be "equal" if and only if they contain exactly the same number of items and each item is the same type, same value, and in the same order in both arrays. Some arrays are provided below for your testing purposes. Be sure to test with different combinations to make sure your script fully works:

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

if (arr1.length === arr2.length) {
        let result=0
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === arr2[i]) {
            result++
        }else{
            console.log("arr1 is not equal to arr2")
        }
    } if (result - 1 === arr1.length){
        console.log("arr1 is equal to arr2")
}
}
else {console.log("arr1 is not equal to arr2")}

// //arr1 vs arr1
// let result = 0;
// for (let i = 0; i <= arr2.length; i++) {
//     if (arr1.length === arr2.length) {
//         if (arr2[i] === arr3[i]) {
//             result++;
//             if (result === arr2.length) {
//                 console.log("arr2 is equal to arr3");
//                 break;
//             } else {
//                 console.log("arr2 is not equal to arr3");
//                 break;
//             }
//         }
//     } else {
//         console.log("arr2 is not equal to arr3");
//         break;
//     }
// }

//arr2 vs arr3
// for (let i = 0; i <= arr2.length; i++) {
//     if (arr2.length === arr3.length) {
//         if (arr2[i] === arr3[i]) {
//             let result = 0;
//             result++;
//             if (result === arr2.length) {
//                 console.log("arr2 is equal to arr3"); 
//                 break;
//             } else {
//                 console.log("arr2 is not equal to arr3");
//                 break;
//             } 
//         }
//     } else {
//         console.log("arr2 is not equal to arr3"); 
//         break;
//     } 
// }

