// const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
// const arr4 = [0, 2, 4, 6];

let a = [1,2,3]
let b = [1,4,3]
// var a = arr4
// var b = arr3
var result = false
for (let i = 0; i < a.length; i++) {
    result = a[i] === b[i]
    if (!result) {
        break
    }
}

console.log(result)

