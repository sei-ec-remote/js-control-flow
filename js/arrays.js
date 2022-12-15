// first a funtion to compare arrays
const compareArrays = (a, b) => {
    return a.toString() === b.toString()
}

// All the different arrays
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr3 = [1, 'a', 3, 9, 'e', 7, 5, 'i'] // I reordered this one to see what it did
const arr4 = [0, 2, 4, 6]

console.log(compareArrays(arr1, arr2)) //true
console.log(compareArrays(arr1, arr3)) //false thought would be true at fist then I re-thought as a computer and yeah it makes sense.
console.log(compareArrays(arr1, arr4)) //false
console.log(compareArrays(arr2, arr3)) //false
console.log(compareArrays(arr2, arr4)) //false
console.log(compareArrays(arr3, arr4)) //false