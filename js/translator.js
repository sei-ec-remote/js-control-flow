// Defining language to output
let languageCode = 'es';

// Printing message based on languageCode variable
if (languageCode === 'en') {
    console.log('Hello World');
} else if (languageCode === 'es') {
    console.log('Hola Mundo');
} else if(languageCode === 'fr') {
    console.log('Bonjour le Monde');
} else if(languageCode === 'du') {
    console.log('Hallo Wereld');
} else {
    console.log('Language is not supported. Please input en, es, fr, or du.');
}