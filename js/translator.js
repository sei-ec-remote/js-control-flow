function translate(lang){
    switch (lang){
        case("en"):
            return "Hello World";
            break
        
        case("es"):
            return "Hola Mundo";
            break
        
        case("de"):
            return "Bonjour le monde";
            break
        
        default:
            return "language not recognized"
    }
}

console.log(translate("d"));