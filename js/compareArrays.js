let a = [1,2,3]
let b = [1,2,3,4]

let loopCount = 0

for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]){
        loopCount++
    }
}

 if (a.length === b.length && loopCount === b.length){
    console.log("Arrays a and b are equal.")
 } else {
    console.log("Arrays a and b are (at least a little) different.")
 }
