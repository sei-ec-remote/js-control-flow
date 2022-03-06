/*Using any of the loop constructs we've learned, 
write a program that will check two arrays for equality. 
You may consider two arrays to be "equal" if and only if
they contain exactly the same number of items and each
item is the same type, same value, and in the same order 
in both arrays. Some arrays are provided below for your 
testing purposes. Be sure to test with different combinations 
to make sure your script fully works:
*/

//two arrays to be compared. I didn't test different combinations
// because I couldn't figure out how to test for matching index
const arr1 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
//establishing a merged array to store elements in new variable
let mergedArray = []
//establish for loop for arr1
const checkEquality = () => {
    if (arr1.length !== arr3.length) {
        return false
    }
    else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr3[i]){
                return false
            }
            else {
                continue
            }
        }
   
    
    }
    return true
}

console.log(checkEquality())
