//let en = " Hello World "
//let es = ' Hola Mundo '
//let vn = " Chao The "
//let fr = " Bonjour Le Monde "

const lang = [' Hola Mundo ', ' Chao The ', 'Bonjour Le Monde']
console.log(Math.floor(Math.random() * lang.length))
if(lang.length === 0) {
    console.log('Hola Mundo')
} else if (lang.length ===1) {
    console.log(['Chao The'])
} else if (lang.length === 2) {
    console.log(['Bonjour Le Monde'])
}
