const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];

const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];

const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];

const arr4 = [0, 2, 4, 6];
const compareArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    else {
      // Comparing each element of your array
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
  };
  
  console.log(compareArrays(arr1, arr2)); 
  console.log(compareArrays(arr1, arr3)); 
  console.log(compareArrays(arr2, arr4)); 