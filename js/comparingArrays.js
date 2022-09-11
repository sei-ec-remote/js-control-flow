const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

//Function to check arrays
 const checkArrays = (arrayOne, arrayTwo) => {
    //First Check length of arrays
    if (arrayOne.length != arrayTwo.length) {
        //Lengths don't match
        console.log('Arrays do not match!')
    } else {
        //Lengths match check individual items
        let match = false
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] === arrayTwo[i]) {
                match = true
            } else {
                match = false
                break //Stop comparing after mismatch
            }
        }
        if (match) {
            //Arrays match
            console.log('Arrays match!')
        } else {
            //rrays don't match
            console.log('Arrays do not match!')
        }
    }
 }

 //Call function to check arrays
 checkArrays(arr1, arr2)