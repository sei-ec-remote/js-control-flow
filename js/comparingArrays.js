// declare arrays

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function compareArr(a, b){

    // is length of array a unequal to length of array b
    if (a.length != b.length) {
        return false
    } else {
        // loop through each element and compare length
        for (let i = 0; i < a.length; i++) {
            if (arr1.length != b.length){
                return false
            } else {
                return true
            }
        }
    }
}

console.log(compareArr(arr1, arr2))
