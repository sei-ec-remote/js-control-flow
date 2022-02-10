//compare the length of the arrays
//use a for loop to iterate the arrays
//compare the iterated array to check if the arrays match
//console.log the result

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];


if(arr1.length == arr2.length) {
  console.log(true)
} else {
  console.log(false)
}
for (let i =0; i< arr1.length ;i++) {
  if (arr1[i] === arr2[i]) {
    console.log(true)
  } else console.log(false)
} 