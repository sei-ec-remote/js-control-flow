const languageChoice = 'fr'
const fr = 'Bonjour Monde'
const de = 'Hallo Welt'
const nl = 'Hallo Wereld'
const pl = 'Witaj swiecie'

if (languageChoice === 'fr') {
    console.log(`Hello World in French is ${fr}.`)
} else if (languageChoice === 'de') {
    console.log(`Hello World in German is ${de}.`)
} else if (languageChoice === 'nl') {
    console.log(`Hello World in Nederlands(Dutch) is ${nl}.`)
} else if (languageChoice === 'de') {
    console.log(`Hello World in Polish is ${pl}.`)
} else {
    console.log('Just stick to one of the four languages, already.')
}