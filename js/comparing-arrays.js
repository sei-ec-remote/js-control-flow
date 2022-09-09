const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

let array1 = arr1
let array2 = arr3

function compareArrays(array1, array2) {
    if (array1.length === array2.length) {
        for(i=0;i<array1.length;i++){
            if (array1[i] !== array2[i]) {
                return false            
            } 
        }
        return true
    } else {
        return false    
    }
}

if (compareArrays(arr1, arr3) == true) {
    console.log ("The arrays are equal")
} else {
    console.log ("The arrays are not equal")
}

