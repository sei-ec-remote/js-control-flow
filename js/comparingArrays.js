//Using any of the loop constructs we've learned, write a program that will check two arrays for equality. You may consider two arrays to be "equal" if and only if they contain exactly the same number of items and each item is the same type, same value, and in the same order in both arrays.  Be sure to test with different combinations to make sure your script fully works:

const arr1 = [1, 2, 'a', 'b', 'c', null, true]
const arr2 = [1.0, 2, 'a', 'b', 'c', null, true]
const arr3 = [1, 12, 'a', 'f', 'g', null, false]
const arr4 = ['a', 'b', 'c']
const arr5 = [1, 2, 'A', 'b', 'c', null, true]
const cArray = []

function compArr(array1, array2){
  if(array1.length === array2.length){
    for(let i=0; i<array1.length; i++){
      if(array1[i] === array2[i] && typeof array1[i] === typeof array2[i]){
        cArray.push(true)
      } else{cArray.push(false)}
    };
    let count = 0;
    for(let j=0; j<cArray.length; j++){
      if(cArray[j] === true){
        count+=1
      }
    }; 
    console.log("The comparison shows:", cArray)
    if(count === array1.length){
      console.log("These arrays are exactly the same in every single way!")
    } else{console.log("These arrays are not exactly the same and I want you to think about that")}
  }
  else{console.log("These arrays are not the same length, therefore cannot be exactly the same.")}
}

compArr(arr1, arr3)
