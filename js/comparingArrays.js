const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'i'];
const arr4 = [0, 2, 4, 6];


for (let i = 0; i < arr1.length; i++){
    for (let j= 0; j < arr3.length; j++ ){
        if (arr1.length===arr3.length){
            (typeof arr1[i] === typeof arr3[j]);
            console.log(true);
        }else{
            console.log(false)
        }
    }
}