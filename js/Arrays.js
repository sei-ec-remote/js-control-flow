const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

let array1 = arr3
let array2 = arr2
let result = false

if(array1.length != array2.length) {
    console.log(result)
}
else {
    for (let i = 0; i < array1.length; i++) {
        result = (array1[i] === array2[i]) 
        if (result == false) {
            break
        }
    } 
}

console.log(result)