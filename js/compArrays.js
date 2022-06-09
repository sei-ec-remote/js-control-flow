const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function compareArrays(arr1, arr2) {
    let result = []
    if (arr1.length != arr2.length) {
        console.log(`Sorry, these arrays are not equal.`)
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                result.push(arr1[i])
                continue
            } else {
                console.log(`Sorry, these two arrays are not equal.`)
                break
            }
        }
    }
    if (result.length === arr1.length) {
        console.log(`Congrats, these arrays are equal.`)
    }
}

compareArrays(arr2, arr1)


// let result = []

// for (let i = 0; i < arr4.length; i++) {
//     if (arr4[i] === arr3[i]) {
//         result.push(arr1[1])
//         continue
//     } else {
//         console.log(`These two arrays are not equal.`)
//         break
//     }
// }

// if (result.length === arr4.length) {
//     console.log(`These two arrays are equal.`)
// }