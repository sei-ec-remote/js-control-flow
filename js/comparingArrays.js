let a = [1, 2, "a", null];
let b = [1, 2, "a", null];
let result = 'equal'

if(a.length !== b.length){
    result = 'not equal'
} else {
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]){
            result = 'not equal'
            break
        }
    }
}
console.log(result)