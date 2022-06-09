const thisLanguage = "ge";

const waysToSay = {
    es: "Hola Mundo",
    fr: "Bonjour le monde",
    ge: "Hallo Welt"
}

function tellMeHow() {
    let thisIsHow = waysToSay[thisLanguage];
    console.log(thisIsHow);
}

tellMeHow();