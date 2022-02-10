//create a input value by creating a variable with value 
let userInput = "Hello World"
//create a variable with language of choice
let language = "it"
//create variables to translate userInput
const englishTranslation = "Hello World"
const frenchTranslation = "bonjour tout let monde"
const italianTranslation = "Ciao a tutti"
const spanishTranslation = "Hola a todos"
//create conditions to log userInput with === operator
//on the condition of the language that's chosen
if (language === "en"){
    console.log(userInput)
}
//for the else if statements, set userInput equal to
// " "Translation variable on the condition that the 
//corresponding language is selected 
else if (language === "fr"){
    userInput = frenchTranslation
    console.log(userInput)
}
else if (language === "sp"){
    userInput = spanishTranslation
    console.log(userInput);
}
else if (language === "it"){
    userInput = italianTranslation
    console.log(userInput)
}
//consoloe.log an issue when the language is not selected
else {
    console.log("translation malfunction")
}

//what input do you want to go in and what output do you want to go out?
//Write a program that reads a variable with language code and prints the 
//translation of "Hello World" for that language.

//Requirements

//You should have a variable for the language code (e.g. "es", "de", "fr", "en").
//Your program should print the translation of "Hello World" based on the language
//code in the variable.
//It should support at least 3 languages
//Make sure to test with the different languages you choose.
//(Feel free to Google the translation if you aren't fluent.)
