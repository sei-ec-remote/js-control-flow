//given arrays to test equality
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i']
const arr4 = [0, 2, 4, 6]
//use .values to break apart array
const iterator = arr1.values()

//declare an empty object

const valueFrequencies = {}
//loop over arr1 and print values
for (const value of iterator) {
  console.log(value)
} if (valueFrequencies[arr1] === valueFrequencies[arr2]) {
  console.log(true)
} else if (valueFrequencies[arr1] === valueFrequencies[arr2]) {
  console.log(false)
}