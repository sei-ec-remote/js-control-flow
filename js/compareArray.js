// let a = [1,2,3];
// let b = [1,2,3];
// console.log(a[1] === b[1]);

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i']
const arr4 = [0, 2, 4, 6]

const compareArrays = () => {
    if(arr1.length !== arr3.length)
        console.log("False")
    else {
        for(let i = 0; i < arr1.length; i++)
        if(arr1[i]!== arr3[i])
        return "False"
        return "True"
        }
}
console.log(compareArrays());