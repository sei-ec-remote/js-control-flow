const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
let result = true


for (let i = 0; i<arr1.length; i++)
//conditional if all values and the length are the same
// I was unsure how to make only 1 message for equal or not eqaual
if (arr1[i] === arr2[i] && arr1.length === arr2.length) {
    console.log("These arrays are equal.")
// conditional if 1 condition is not met
    } else if (arr1[i] !== arr2[i] || arr1.length !== arr2.length){
      console.log("These arrays are not equal.")
    }
