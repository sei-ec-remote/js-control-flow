// ### translator.js
// Write a program that reads a variable with language code and prints the translation of "Hello World" 
//for that language.

// **Requirements**
// * You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// * Your program should print the translation of "Hello World" based on the language code in the variable.
// * It should support at least 3 languages
// * Make sure to test with the different languages you choose.
// * (Feel free to Google the translation if you aren't fluent.)

// languages supported:
// English - en
// Latin - la
// Esperanto - es 
// Catalan - ca
// British -br
const languageCode = "c";

if (languageCode === "la") {
    console.log("Salve Mundo")
} else if (languageCode === "en") {
    console.log("Hello World")
} else if (languageCode === "es") {
    console.log("Saluton Mondo")
} else if (languageCode === "ca") {
    console.log("hola món")
} else if (languageCode === "br") {
    console.log("Oi, Guv\'nuh! Tally ho old bean, tally ho!")
} else {
    console.log("Please select a language code from the list above")
}

