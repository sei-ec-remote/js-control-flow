// ### translator.js
// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

//**Requirements**
//* You should have a variable for the language code (e.g. "es", "de", "fr", "en").
//* Your program should print the translation of "Hello World" based on the language code in the variable.
//* It should support at least 3 languages
//* Make sure to test with the different languages you choose.
//* (Feel free to Google the translation if you aren't fluent.)

// let en = "Hello World"
// let es = "Hola Mundo"
// let vn = "Chao The"
// let fr = "Bonjour Le Monde"

const lang = [
    'Hello World',
     'Hola Mundo',
     'Chao The',
     'Bonjour Le Monde'
] 

console.log(Math.floor(Math.random() * lang.length))
if (lang.length === 0) {
    console.log('Hola Mundo')
} else if (lang.length === 1) {
    console.log(['Chao The'])
} else if (lang.length === 2) {
    console.log(['Bonjour Le Monde'])
}





