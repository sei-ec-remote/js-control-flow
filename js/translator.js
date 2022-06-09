// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

//     Requirements

// You should have a variable for the language code(e.g. "es", "de", "fr", "en").
// Your program should print the translation of "Hello World" based on the language code in the variable.
// It should support at least 3 languages
// Make sure to test with the different languages you choose.
// (Feel free to Google the translation if you aren't fluent.)

let language = "fr"

if (language === "en") {
    console.log("Hello Universe")
} else if (language === "es") {
    console.log("hola universo")
} else if (language === "de") {
    console.log("Hallo Universum")
} else if (language === "fr") {
    console.log("Bonjour Univers")
} else{console.log("Let me get my Pixel so I can use Google Translate")}


