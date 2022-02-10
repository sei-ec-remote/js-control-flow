let thing = 'burger'
let count = 2

// if count = 1, it is singular - therefore does not need an 's'
if (count === 1){
    console.log(count + " " + thing)
    // everything else will be pluralized the same way
} else {
    console.log( count + " " + thing + "s")
}