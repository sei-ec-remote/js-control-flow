// Define arrays
const array1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const array2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];

// First check the lengths, if they are not equal arrays will not be equal.
if(array1.length != array2.length){
    console.log('The arrays are not equal as they are not the same size')
    return
} else {
    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            console.log('The arrays are not equal')
            return
        }
    }
    console.log('The arrays are the same')
}

// Note: I tested with all types of arrays, I left the two in the example at the top
//       so it would be easy to check