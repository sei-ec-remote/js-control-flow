function translator(langCode) {
    if (langCode == 'en') {
        console.log('Hello World')
    } else if (langCode == 'vn') {
        console.log('Chào thế giới')
    } else if (langCode == 'es') {
        console.log('Hola Mundo')
    } else {
        console.log('Input \'en\', \'vn\', or \'es\' for language.' )
    }
}
translator('et')