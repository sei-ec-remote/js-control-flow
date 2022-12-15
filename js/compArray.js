let arr1=[1, 'a', 3, 'e', 5, 7, 9, 'i']
let arr2=[1, 'a', 3, 'e', 5, 7, 9, 'i']
if (arr1.length!==arr2.length) {
    console.log("These arrays just don't match!")
} 
// This was my first attempt. I almost submitted it but realized it couldn't distinguish between type
// else {
//     let str1=arr1.toString()
//     let str2=arr2.toString()
//     if (str1===str2) {
//     console.log("Wowee! We've got a match!")
//     console.log(str1)
//     console.log(str2)
//     }
//     else {
//         console.log("These arrays just don't match!")   
//     }
// }
else {
    let test=[]
    for (let i=0; i < arr1.length; i++) {
    test[i]=(arr1[i]===arr2[i])
    }
        // console.log(test)
        // console.log(test.indexOf(false))
    if (test.indexOf(false) >= 0) {
        console.log("These arrays just don't match!")
     }
    else {
        console.log("Wowee! We've got a match!")
    }
}