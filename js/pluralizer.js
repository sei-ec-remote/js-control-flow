const counts = [1,2,3,4,5];

let thing = 'cat';
let count = Math.floor(Math.random() * count.length);

if (count >= 2) {
    console.log(count + thing + 's')
} else if (count === 0) {
    console.log(count + thing + " s")
} else {
    console.log(count+thing)
}


