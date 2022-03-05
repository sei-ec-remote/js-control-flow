const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];


const compare = (a,b) => {
    if (a.length === b.length){
      for (let i = 0; i < arr1.length; i++) {
        if (a[i] !== b[i]) {
          return false
        } 
      } return true
    } return false
}
console.log(compare(arr1,arr4))