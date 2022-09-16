const es = 'Hola mundo'
const de = 'Hallo Welt'
const fr = 'Salut tout le monde'

const translate = (lang) => {
    if (lang === es) {
        console.log(es)
    } else if (lang === de) {
        console.log(de)
    } else if (lang === fr) {
        console.log(fr)
    }
}

translate(fr)