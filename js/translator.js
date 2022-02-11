const greetings = [
    {
        language: "en",
        hello: "Hello world!"
    },
    {
        language: "es",
        hello: "Hola mundo!"    
    },
    {
        language: "de",
        hello: "Hallo Welt!"
    },
    {   language: "fr",
        hello: "Bonjour le monde!"
    },
    {
        language: "jp",
        hello: "Konnichiwa sekai!"
    },
    {
        language: "zu",
        hello: "Sawubona Mhlaba!"
    }
]

const selectLang = "zu"
for (let i = 0; i < greetings.length; i++)
    if (greetings[i].language === selectLang) {
        console.log(greetings[i].hello)
    }