// translator.js
// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

// **Requirements**
// * You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// * Your program should print the translation of "Hello World" based on the language code in the variable.
// * It should support at least 3 languages
// * Make sure to test with the different languages you choose.
// * (Feel free to Google the translation if you aren't fluent.)



const codes = ["ru", "es", "fr", "en"];

const messages = {
    en: "Hello World!",
    fr: "Bonjour le Monde !",
    es: "¡Hola Mundo!",
    ru: "Привет, мир!"
}

// If you want to translate just one language against the messages object

let random = Math.floor(Math.random() * 3)

for (key in messages) {

    if (codes[random] === key) {
        
        console.log("Single translation: ", "\n", codes[random], ":", messages[key]);

    }

}

// If you want to translate all possible languages against the messages object
console.log("\n" + 'Translate every language:')

for (let i = 0; i < codes.length; i++) {

    for (key in messages) {

        if (codes[i] === key) {

            console.log(codes[i], ":", messages[key]);

        }

    }
}