const arr1 = [1, "a", 3, "e", 5, 7, 9, "i"];
const arr2 = [1, "a", 3, "e", 5, 7, 9, "i"];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

// I don't know how to solve this problem without writing it as a function with a return statement that ends the function once the condition is met.

function compareArr(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return ('These two arrays do not contain the same number of elements.');
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return ('These two arrays are not the same.');
      } 
    } 
  } return ('These two arrays are the same.');
}


console.log(compareArr(arr1, arr2)) // 'These two arrays are not the same.'
console.log(compareArr(arr1, arr3)) // 'These two arrays are the same.'
console.log(compareArr(arr2, arr4)) // 'These two arrays do not contain the same number of elements.'