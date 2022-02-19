const arr1 = [1, 'a', 3, 'e', "5", 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];
const arr5 = [1, 'a', 3, 'e', "5", 7, 9, 'i']
const arrCombine = [arr1, arr2]

// let str1 = arr1.toString()
// let str2 = arr2.toString()
// let str3 = arr3.toString()
// let str4 = arr4.toString()

// for (let i = 0; i < (arrCombine.length - 1); i++) {
//     let str1 = arrCombine[i].toString()
//     let str2 = arrCombine[i + 1].toString()
//     console.log(str1 === str2)
// }

const isEqual = (array1, array2) =>{
    for(let i = 0; i < array1.length; i++){
    if(array1.length !== array2.length){
        return false
    } else if (array1[i] !== array2[i]){
        return false
    }
    }return true}


console.log(isEqual(arr1, arr2))