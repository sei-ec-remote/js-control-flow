const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

const firstArray = arr1;
const secondArray = arr3;

let arraysAreEqual = false;

if (firstArray.length === secondArray.length) {
  firstArray.sort()
  secondArray.sort()
  for (let i = 0; i < firstArray.length; i++){
    if (firstArray[i] === secondArray[i]) {
      arraysAreEqual = true;
      continue
    } else if (firstArray[i] !== secondArray[i]) {
      arraysAreEqual = false;
      break
    } 
  }
} 

if (arraysAreEqual) {
  console.log("The arrays are EQUAL")
} else {
  console.log("The arrays are NOT equal")
}