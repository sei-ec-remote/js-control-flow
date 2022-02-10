
//Create a function that will compare both elements and lengths of the Array.
function compareArrays() {
    //define variables
    const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
    const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
    const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
    const arr4 = [0, 2, 4, 6];
   
    //compare the lengths of the arrays, if they are different lengths then they are false. 
    if(arr1.length!=arr3.length)
        return "False";
    else {
        // compare each element in the array. If they all Match return True
        for(var i=0;i<arr1.length;i++)
            if(arr1[i]!=arr3[i])
                return "False";
            return "True";
        }
}
console.log(compareArrays());