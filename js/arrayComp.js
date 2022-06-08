const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function arrayComp(array1, array2){
    let result = true;
    if (array1.length !== array2.length){
        result = false;
    }
    for(let i=0;i<array1.length;i++){
        if(array1[i] !== array2[i]){
            result = false;
        }
    }
    return result
}

console.log(arrayComp(arr1, arr1));