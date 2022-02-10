let english = "Hello World"
let spanish = "Hola Mundo"
let french = "Bonjour le monde"

console.log(`${english} is ${spanish} in Spanish and ${french} in French`)

if (english !== spanish) {
    console.log(`${english} in English is ${spanish} in Spanish`)
} else if (english !== french) {
    console.log(`${english} in English is ${french} in French`)
}