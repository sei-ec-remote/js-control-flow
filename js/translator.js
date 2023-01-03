//### translator.js
//Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

//**Requirements**
//* You should have a variable for the language code (e.g. "es", "de", "fr", "en").
//* Your program should print the translation of "Hello World" based on the language code in the variable.
//* It should support at least 3 languages
//* Make sure to test with the different languages you choose.
//* (Feel free to Google the translation if you aren't fluent.)



let lang = "Klingon" 



  if (lang == "Spanish") {
    console.log("-Hello World- in English translates to -Hola Mundo- in Spanish") 
  
  } else if (lang == "French") { 
    console.log("-Hello World- in English translates to -Bonjour le Monde- in French") 
  
  } else if (lang == "Klingon") {
    console.log("-Hello World- in English translates to -Qo' vIvan- in Klingon")
    
  } else {
    console.log("I don't understand you, you must be mumbling like the Chargh you are!")
  

  
}