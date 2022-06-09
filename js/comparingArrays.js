const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

let result = null

if(arr1.length !== arr2.length){
    result = 'not equal'
} else {
    for(let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr4[i]){
            result = 'not equal'
            break
        } 
    }
}
console.log(result)

//this still doesnt really make sense to me...