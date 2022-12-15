let a = [1,2,5,8];
let b = [1,2,3];

if(JSON.stringify(a)===JSON.stringify(b) && a.length===b.length){
    console.log('Arrays are equal')
} else{
    console.log('Arrays are not equal')
}