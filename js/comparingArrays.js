// let a = [1,2,3];
// let b = [1,2,3];
// console.log(a === b);  // This will never be true

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

const comparingArrays = (array1,array2) => {
    for (let i = 0; i < array1.length && array2.length; i++) {
        if (array1[i] === array2[i]) {
            console.log(`${array1[i]} and ${array2[i]} are equal!`)
        } else {
            console.log(`${array1[i]} and ${array2[i]} are NOT equal!`)
        }
    }
}
    
comparingArrays(arr3,arr2)

