// Using any of the loop constructs we've learned, write a program that will check two arrays for equality. You may consider two arrays to be "equal" if and only if they contain exactly the same number of items and each item is the same type, same value, and in the same order in both arrays. Some arrays are provided below for your testing purposes. Be sure to test with different combinations to make sure your script fully works:
 
// ```javascript
// const arr1 = [1, "a", 3, "e", 5, 7, 9, "i"];
// const arr2 = [1, "a", 3, "e", 5, 7, 9, "i"];
// const arr3 = [1, "a", 3, 5, "e", 7, 10, "i"];
// const arr4 = [0, 2, 4, 6];
 
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      console.log("They are identicle!");
    } else {
      console.log("They are different!");
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === arr3[i]) {
      console.log("They are identicle!");
    } else {
      console.log("They are different!");
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr4[i]) {
      console.log("They are identicle!");
    } else {
      console.log("They are different!");
    }
  }
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === arr4[i]) {
      console.log("They are identicle!");
    } else {
      console.log("They are different!");
    }
  }
  