const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']


if (arr1.length !== arr2.length) {
  console.log('Arrays are not the same length')
} else {
    let result = false 
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        result = true
      } else {
        console.log('Arrays are different') 
        result = false
        break
      }
    }
    if (result === true) {
      console.log('Arrays are the same')
    }
}