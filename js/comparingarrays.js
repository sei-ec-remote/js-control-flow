const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];
// creates a function
function comArray(firstArray, secondArray) {
    if(firstArray.length === secondArray.length) {
        for (let i = 0; i < firstArray.length; i++) {
            if (firstArry[i]=== secondArray[i]) {
                 if ( i === firstArray.length) {
                    console.log("The arrays are equal")
                }
            } else {
                console.log('The arrays are equal')
                break
            }
            
        }
    } else { 
        console.log("The arrays are not equal")}
}
compArray(arr1, arr2)