// This program will read a variable with a language code and print the
// translation of 'Hello World' for that language.


// Using Node.js for reading in input so you can read in language code.
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your language code: ', function (langCode) {
        let languageCode1 = 'es';
        let languageCode2 = 'fr';
        let languageCode3 = 'it';
        const translateCode1 = "Hola Mundo";
        const translateCode2 = "Salut tout le monde";
        const translateCode3 = "Salve, mondo";

        if (langCode === languageCode1) {
            console.log(`Hello World in language code ${languageCode1} is translated to: ${translateCode1}`);
        } else if (langCode == languageCode2) {
            console.log(`Hello World in language code ${languageCode2} is translated to: ${translateCode2}`);
        } else if (langCode == languageCode3) {
            console.log(`Hello World in language code ${languageCode3} is translated to: ${translateCode3}`);
        } else {
            console.log(`That language code is not supported.`);
        }
        rl.close();
});