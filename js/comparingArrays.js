let array1
let array2 
let compared = true
for (i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
        continue
    } else {
        compared = false
        break
    }
}
console.log(compared)