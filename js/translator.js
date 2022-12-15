//english message
let message = "Hello World!"
//set the language, choose between ed, de, fr, it
let lang = "it"
if (lang === "es") { //spanish
    message = "Hola Mundo!"
} else if (lang === "de") { //german
    message = "Hallo Welt!"
} else if (lang === "fr") { //french
    message = "Bonjour le Monde!"
} else if (lang === "it") { //italian
    message = "Ciao Mondo!"
} else { //if other values are input message remains english
    message = message
}
// prints updated message
console.log(message)