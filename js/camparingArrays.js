const arr1 = [1, "a", 3, "e", 5, 7, 9, "i"];
const arr2 = [1, "a", 3, "e", 5, 7, 9, "i"];
const arr3 = [1, "a", 3, 5, "e", 7, 10, "i"]; 
const arr4 = [0, 2, 4, 6]; 

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1.length === arr4.length){
            if ((typeof arr1[i]) === (typeof arr4[j])) {
                if(arr1[i] === arr2 [j]) {
                    console.log("they are equal")
                } else {
                     console.log("they are not equal")}
                } else{
                    console.log("they are not the same lengths")
                }

        }
    }
}