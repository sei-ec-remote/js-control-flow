// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

// **Requirements**
// * You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// * Your program should print the translation of "Hello World" based on the language code in the variable.
// * It should support at least 3 languages
// * Make sure to test with the different languages you choose.
// * (Feel free to Google the translation if you aren't fluent.)

let language = [
    "es",
    "fr",
    "en"
] 
let text = [
    "Hola mundo",
    "Bonjour le monde",
    "Hello world"
]
if (language = "es") {
    console.log(text[0])
  } else if (language = "fr") {
    console.log(text[1])
  } else if (language = "en") {
      console.log(text[2])
}