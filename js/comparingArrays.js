const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function compareArrays(a1,a2) {
    for(let i=0;i<a1.length;i++) {
        if(a1.length !== a2.length) {
            console.log("These arrays are not even the same length, much less equal.");
            i = a1.length;
        } else if(a1[i] !== a2[i]) {
            console.log("These arrays are the same length, but not equal.");
            i = a1.length;
        } else if(i === a1.length-1) {
            console.log("These arrays... are equal!");
        }
    }
}

compareArrays(arr1,arr4);