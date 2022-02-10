//start
let thing = 'car'
let count = 1

// more than 1 count adds the letter s onto the end of thing
if (count > 1) {
    thing = (`${thing}s`)
    console.log(count + ' ' + thing)
// if not, just stays the same
} else {
    console.log(count + ' ' + thing)
}