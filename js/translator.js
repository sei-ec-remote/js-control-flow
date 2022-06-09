var languageChoice = ['en', 'vi', 'it', 'uk']

var rand = (Math.floor(Math.random())*languageChoice.length);
var rValue = languageChoice[rand];
console.log(rValue)

    if (languageChoice === "en") {
        console.log('Hello World')
    }
    else if (languageChoice === "vi") {
        console.log("Chào thế giới") 
    }
    else if (languageChoice === "it") {
        console.log ("Salve, mondo") 
    }
    else if (languageChoice === "uk") {
        console.log("привіт, народ")
    }

console.log(languageChoice)