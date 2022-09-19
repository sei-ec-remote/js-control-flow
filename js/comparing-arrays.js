
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];

//equality = same number of items (length)

const equalLength = (arr1, arr2) => {
    let array1Length = arr1.length
    let array2Length = arr2.length

    if (array1Length !== array2Length)
        return false
}


//the same order
const sameType = (arr1, arr2) => {
    for(const i=0; arr1.length < i; i++)
        if(arr1[i] !== arr2[i]) {
            return false
        }
}
//otherwise, return true
return true