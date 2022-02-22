// The given arrays to test against each other for length
// and identical entries.
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];


// A simple test of length
let test1 = arr1.length === arr2.length
// Checking each individual item in one array against the
// item in the same index position in the second array.
// Once a mismatch is found, the check will return false
// and stop the loop, otherwise if all entries match, it
// will return true.
let test2 = null
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
        test2 = false
        break
    } else {
        test2 = true
    }
}

let test3 = arr1.length === arr3.length
let test4 = null
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr3[i]) {
        test4 = false
        break
    } else {
        test4 = true
    }
}

let test5 = arr2.length === arr3.length
let test6 = null
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== arr3[i]) {
        test6 = false
        break
    } else {
        test6 = true
    }
}

let test7 = arr1.length === arr4.length
let test8 = null
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr4[i]) {
        test8 = false
        break
    } else {
        test8 = true
    }
}

let test9 = arr2.length === arr4.length
let test10 = null
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== arr4[i]) {
        test10 = false
        break
    } else {
        test10 = true
    }
}

let test11 = arr3.length === arr4.length
let test12 = null
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] !== arr4[i]) {
        test12 = false
        break
    } else {
        test12 = true
    }
}

console.log("Do arr1 and arr2 have the same number of entries?", test1)
console.log("Do arr1 and arr2 have the same entries?", test2)
console.log("Do arr1 and arr3 have the same number of entries?", test3)
console.log("Do arr1 and arr3 have the same entries?", test4)
console.log("Do arr2 and arr3 have the same number of entries?", test5)
console.log("Do arr2 and arr3 have the same entries?", test6)
console.log("Do arr1 and arr4 have the same number of entries?", test7)
console.log("Do arr1 and arr4 have the same entries?", test8)
console.log("Do arr2 and arr4 have the same number of entries?", test9)
console.log("Do arr2 and arr4 have the same entries?", test10)
console.log("Do arr3 and arr4 have the same number of entries?", test11)
console.log("Do arr3 and arr4 have the same entries?", test12)