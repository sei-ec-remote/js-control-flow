// ### translator.js
// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

// **Requirements**
// * You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// * Your program should print the translation of "Hello World" based on the language code in the variable.
// * It should support at least 3 languages
// * Make sure to test with the different languages you choose.
// * (Feel free to Google the translation if you aren't fluent.)
function translation(lang1, lang2) {
    let languages = ['eng', 'kor', 'esp'];
    let english = 'Hello World';
    let korean = '안녕하세요 세계';
    let spanish = 'Hola Mundo';
    for (let i = 0; i <= languages.length; i++) {
        if (lang1 === languages[i]) {
            if (lang2 === languages[0]) {
                console.log(english)
            }
            else if (lang2 === languages[1]) {
                console.log(korean)
            }
            else if (lang2 === languages[2]) {
                console.log(spanish)
            }
            else {
                console.log('Dont have this language translation!')
            }
        }
    }
}

translation('esp', 'eng')