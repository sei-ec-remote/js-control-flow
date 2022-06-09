const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];
function compareArray(arr1,arr2){
    //check if the array is the same length, if not the same length the array is not the same
    if(arr1.length !== arr2.length){
        console.log('array 1 and 2 are not the same!')
    }else{
        let isTrue = null;
        //check if both array have the same element in the same index, 
        //if true the arary is the same, if false the array is not the same and break out of the loop
        for(i=0;i<arr1.length;i++){
            if(arr1[i]===arr2[i]){
                isTrue=true;
            }else{
                isTrue=false;
                break;
            }
        }
        if(isTrue){
            console.log("array 1 and 2 are the same!");
        }else{
            console.log("array 1 and 2 are not the same!");
        }
    }
}
compareArray(arr1,arr4);