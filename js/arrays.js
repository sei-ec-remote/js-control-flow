const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'B', 3, 5, 'e', 10, 'i'];
const arr3 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
let result = true


for (let i = 0; i<arr1.length; i++)
//conditional if all values and the length are the same
if (arr1[i] !== arr2[i]) {
    result = false
    }
console.log(result)