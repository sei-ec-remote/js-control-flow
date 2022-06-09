//So close

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i']
const arr4 = [0, 2, 4, 6]

//set arrays here after '=' sign
let arrayA = arr1
let arrayB = arr3

//----------------

function successMessage(){
    console.log("Arrays are equal")
}

function failMessage(){
    console.log("Arrays are not equal")
}

if (arrayA.length !== arrayB.length){
    failMessage()
    
} else {

    for (let i = 0; i < arrayA.length; i++) {

        if (arrayA[i] === arrayB[i]){                      
        }
        else {
            failMessage()
            break 
        }
    
    
    }


}