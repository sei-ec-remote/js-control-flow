const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [0, 2, 4, 6];

if (arr1.length !== arr2.length) {
    console.log("These arrays are different.")
}
else {
    failFlag = false
    for (i=0; i<arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            failFlag = true
            break
        }
    }

    if (failFlag === true) {
        console.log("These arrays are different.")
    }
    else {
        console.log("These arrays are the same!")
    }
}

