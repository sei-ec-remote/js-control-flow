const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function allAreEqual(array) {
    const result = array.every(element => {
        if (element === array[0]) {
            return true;
        }
    });
    
    return result;
}

console.log(allAreEqual(arr1)); // true
console.log(allAreEqual(arr3)); // false