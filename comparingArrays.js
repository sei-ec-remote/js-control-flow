const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']; // Enter any two arrays
const arr2 = [1, 'a', 4, 'e', 5, 7, 9, 'i', 84]; // Enter any two arrays

if(arr1.length === arr2.length && (JSON.stringify(arr1)) === (JSON.stringify(arr2))) {
    console.log('Arrays are equal!');
} else {
    console.log('Arrays are not equal!')
}