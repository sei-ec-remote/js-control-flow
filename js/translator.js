//Done

const languages = ['es', 'de', 'fr', 'en']
const helloList = ['Hola Mundo', 'Hallo Welt', 'Bonjour le monde', 'Hello World' ]

//change language code below in pick
// 0 is Spanish, 1 is German, 2 is French, 3 is English
let pick = 3

let setLanguage = languages[pick]

if (setLanguage === languages[0]) {
    console.log(helloList[0])
} else if (setLanguage === languages[1]){
    console.log(helloList[1])
} else if (setLanguage === languages[2]){
    console.log(helloList[2])
} else if (setLanguage === languages[3]){
    console.log(helloList[3])
} else {}