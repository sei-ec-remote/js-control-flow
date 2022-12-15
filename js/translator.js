// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

// Requirements

// You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// Your program should print the translation of "Hello World" based on the language code in the variable.
// It should support at least 3 languages
// Make sure to test with the different languages you choose.
// (Feel free to Google the translation if you aren't fluent.)

// Languages - english, danish, icelandic - source: google.translate

let lang

function translator(lang){
  if(lang.toLowerCase() === 'es' ){
    console.log("Hello world!")
  } else if(lang.toLowerCase() ==='de'){
    console.log("Hej Verden!")
  } else if(lang.toLowerCase() === 'is'){
    console.log("Hallo heimur")
  }
  else{
    console.log("Sorry, that language is not supported at this time, try again later!")
  }
}

let myLang = 'is'
translator(myLang)