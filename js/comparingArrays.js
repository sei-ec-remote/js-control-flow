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
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
//establishing a merged array to store elements in new variable
let mergedArray = []
//establish for loop for arr1
for (let i = 0; i < arr1.length; i++) {
    //nest for loop for arr3
    for (let j = 0; j < arr3.length; j++){
        if (arr1[i] === arr3[j]){
            //arr3 element loops for each arr1 element and this condition
            //checks whether any number in arr3 matches with that of arr1
            //if it does, it gets stored in mergedArray array
            mergedArray = arr1[i]
            //prints the elements in new array that have matching equality
            //not by index, but by 
            console.log(mergedArray)  
           
        }
        
    }
    
}


