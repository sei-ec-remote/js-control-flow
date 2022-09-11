// Langagues allowed ["es", "de", "fr"]
let languageCode = 'de'
let translation = ''
if (languageCode === 'es') {
    console.log('Hola Mundo')
} else if (languageCode === 'de') {
    console.log('Hallo Welt')
} else if (languageCode === 'fr') {
    console.log('Bonjour le monde')
} else {
    console.log('Language code not recognized')
}