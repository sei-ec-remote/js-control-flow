function arraycompare(arr1 , arr2){
    if (arr1.length === arr2.length){
        for(let index = 0 ; index < arr1.length ; index++){
            if(arr1[index] != arr2[index]){
                return
            }
        }
        console.log(`${arr1} and ${arr2} are same`)
    }
}


const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

arraycompare(arr1, arr3)