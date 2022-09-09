const arr1 = [1,2,3];
const arr2 = [1,2,3,5];

let mismatch = 0;

if (arr1.length = arr2.length) {
    for (i=0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            ++mismatch;
        }
    }
} else {
    ++mismatch;
}



(mismatch > 0)?console.log('Arrays do not match'):console.log('Arrays match')