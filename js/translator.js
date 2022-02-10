
let en = 'Hello World'
let sp = 'Hola Mundo'
let fr = 'Bonjour le monde'
let la = 'Hella mundi'

console.log(sp);

let arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']

let arr2 = [0, 2, 4, 6]

for (i = 0; i < arr1.length; i ++) {
    if (arr1[i] == arr2[i]) {
        console.log(true)
    } else {
        console.log(`They are not the same`)
    }
}

