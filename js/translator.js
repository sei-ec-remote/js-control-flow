function translator(lang) {
    if (lang == "en") {
        console.log("Hello world");
    } else if (lang == "ru") {
        console.log("Привет, мир");
    } else if (lang == "es") {
        console.log("Hola Mundo");
    } else {
        console.log("Please enter 'en' for English, 'ru' for Russian, or 'es' for Spanish. Those are the only currently supported languages.")
    }
}

translator("en");