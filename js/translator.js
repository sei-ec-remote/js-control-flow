let languageCode = 'de' // 'fr' for French, 'de' for German, 'es' for Spanish
if (languageCode === 'fr') {
    console.log('"Hello world" in English is "Bonjour le monde" in French.');
} else if (languageCode === "de") {
    console.log('"Hello world" in English is "Hallo welt" in German.');
} else if (languageCode === "es") {
    console.log('"Hello world" in English is "Hola mundo" in Spanish.');
} else {
    console.log('Sorry! Not available in this language.');
}