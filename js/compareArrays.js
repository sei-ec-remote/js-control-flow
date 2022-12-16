//note to self: loose/strict equality check reference not value...
// need function to convert arrrays (JSON.stringify)
// declare arrays then compare


const convertArrays = (arr1, arr2) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2)
}

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];
 
if (convertArrays(arr1, arr2)){
    console.log(`The two arrays are the same`)
} else {
    console.log(`The two arrays are not the same`)
}

