const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function compArr (fArr1, fArr2) {
    if (fArr1.length === fArr2.length) {
        for(let i = 0; i < fArr1.length; i++){
            if(fArr1[i] != fArr2[i]){
                return "Arrays are not identical"
            }
        } return 'Arrays are identical'
    } 
}

console.log(compArr(arr1,arr2))
console.log(compArr(arr2,arr3))