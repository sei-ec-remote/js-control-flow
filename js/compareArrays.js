const compareArrays = (arr1, arr2) => {
    for (let i=0; i<arr1.length; i++) {
        if ((arr1.length === arr2.length) && (arr1[i] === arr2[i])) {
            console.log('array index ' + i + ' is equal')
        } else console.log('array index ' + i + ' is not equal')
    } 
}

const array1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const array2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const array3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const array4 = [0, 2, 4, 6];

console.log(compareArrays(array1, array3))