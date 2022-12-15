const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];
//choose an array from the four choices
const firstArrayChoice = arr1
//choose a different array from the four choices
const secondArrayChoice = arr2

if (firstArrayChoice.length === secondArrayChoice.length) {
    //compare two arrays by looping over each
    for (i = 0; i < firstArrayChoice.length; i++) {
        if (firstArrayChoice[i] === secondArrayChoice[i]) {
            console.log(`${firstArrayChoice[i]} and ${secondArrayChoice[i]} have the same value types and values!  You may live, for now...`)
        } else {
            console.log(`Anomaly detected! ${firstArrayChoice} and ${secondArrayChoice} cannot be equal!`)
            break
        }
    }
} else {
    console.log(`${firstArrayChoice} and ${secondArrayChoice} are different lengths, therefore they cannot be equal.`)
}
