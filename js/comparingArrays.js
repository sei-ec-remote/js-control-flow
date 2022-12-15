const arr1 = ['b', 1, 'u', 3];
const arr2 = ['b', 'l', 'u', 'e'];
const arr3 = ['b', 1, 'u', 3];
const arr4 = [6, 4, 5];


for (var count1 = 0; count1 < arr1.length; count1++) {
  for (var count2 = 0; count2 < arr3.length; count2++) {
      if (arr1[count1] == arr3[count2]) {
        console.log(`equal ${arr1[count1]}`)
      } else {
        console.log(`does NOT equal ${arr3[count2]}`)
      }
  }
}

