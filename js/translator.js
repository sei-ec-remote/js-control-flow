const fr = "french" 
const de = "german"
const es = "spanish"

function translateHelloWorld(language_code){
    if (language_code === "french") {
        console.log("Bonjour Monde!")
    } else if (language_code === "german") {
        console.log("Hallo Welt") 
    } else if (language_code === "spanish") {
        console.log("Hola Mundo")
    } else (
        console.log("I am sorry, I do not understand")
    )
}

translateHelloWorld(de)
