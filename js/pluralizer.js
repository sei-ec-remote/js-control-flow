// thing to turn plural
let thing = 'dog';
// number of thing(s)
let count = 1;
//if the value of count isn't 1 add an 's' at the end of thing value
if (count !== 1) {
    thing = thing + 's'
} else {
    thing = thing
}
// print updated thing value
console.log(thing)