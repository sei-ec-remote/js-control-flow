//given arrays to test equality
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i']
const arr4 = [0, 2, 4, 6]


if(arr3.length !== arr4.length) { 
  return console.log(false) 
} else { 
  for (let i = 0; i < arr3.length; i++) { 
    if (arr3[i] !== arr4[i]) { 
      return console.log(false) 
    } 
  } console.log('equal') 
}


