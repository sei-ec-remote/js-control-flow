const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function arrayTester(a, b) {
    let equality = "The arrays " + a + " and " + b + " are equal.";
    let inequality = "The arrays " + a + " and " + b + " are not equal.";
    if (a.length == b.length) {
        let iterations = 0
        for (i=0; i < a.length; i++) {
            if (a[i] === b[i]) {
                iterations += 1;
            } else {
                console.log(inequality);
                break;
            }
        } if (a.length == iterations) {
            console.log(equality);
        }
    } else {
        console.log(inequality);
    }
}
console.log(arr4.length);
arrayTester(arr2,arr1);