// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.
// Requirements
// You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// Your program should print the translation of "Hello World" based on the language code in the variable.
// It should support at least 3 languages
// Make sure to test with the different languages you choose.
// (Feel free to Google the translation if you aren't fluent.)

const translationChoices = [
    'es', //spanish
    'fr', //french
    'de'  //german
]
const languageCode = translationChoices[Math.floor(Math.random()*translationChoices.length)]

if (languageCode === translationChoices[0])
    console.log("Hola Mundo")
else if (languageCode === translationChoices[1])
    console.log("Bonjour le monde")
else
    console.log("Hallo Welt")
