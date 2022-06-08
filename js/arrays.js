const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']; //sample arrays
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'b', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

// function to compare two arrays. Two arguments are passed and get compared to one another
function compArray(firstArray, secondArray) {
    let arrayCompare = null;
    if (firstArray.length === secondArray.length) {
        for (let i = 0; i < firstArray.length; i++) {
            if (firstArray[i] === secondArray[i]) {
                arrayCompare++;
                // console.log(arrayCompare)
                if (arrayCompare === firstArray.length) {
                    console.log('The arrays are equal!')
                }
            } else {
                console.log('The arrays are not equal...')
                break
            }
        }
    } else {
        console.log('The arrays are not equal...')
    }
}

compArray(arr1, arr2); //function gets called with two parameters