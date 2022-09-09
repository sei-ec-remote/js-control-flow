let array1 = [ 1, 5, 3, 4, 5 ];
let array2 = [ 1, 2, 3, 4, 5 ];
 
const isEqual = array1.length === array2.length &&
            array1.every((value, index) => value === array2[index])
 
console.log(isEqual);