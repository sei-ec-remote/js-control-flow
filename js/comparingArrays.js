// I don't understand this one
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

let a = arr1.length;
let b = arr2.length;
console.log(a === b);

for (let i = 0; i < a; i++)
  if (arr1[i] != arr2[i])
    return false;
