const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];

if(arr1.length===arr2.length && arr1.every((val, index) => val === arr2[index])) {
    console.log('Array one and two are the same.')
} else {
    console.log('Array one and two do not match')
} 
if(arr1.length===arr3.length && arr1.every((val, index) => val === arr3[index])) {
    console.log('Array one and three are are the same.')
} else {
    console.log('Array one and three do not match')
}
if(arr2.length===arr3.length && arr2.every((val, index) => val === arr3[index])) {
    console.log('Array two and three are the same.')
} else {
    console.log('Array two and three do not match')
}
