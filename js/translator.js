// Write a program that reads a variable with language code and 
// prints the translation of "Hello World" for that language.
//   Requirements
// You should have a variable for the language code 
// (e.g. "es", "de", "fr", "en").
// Your program should print the translation of "Hello World" 
// based on the language code in the variable.
// It should support at least 3 languages
// Make sure to test with the different languages you choose.
// (Feel free to Google the translation if you aren't fluent.)

let languageCode = 'ar';
if (languageCode === 'es') {
    console.log('¡Hola, mundo!');
} else if (languageCode === 'jp') {
    console.log('こんにちは世界');
} else if (languageCode === 'am') {
    console.log('በአማርኛ');
} else if (languageCode === 'ar') {
    console.log('مرحبا بالعالم');
} else {
    console.log('Isn\'t it great that the world has so many languages?')
}