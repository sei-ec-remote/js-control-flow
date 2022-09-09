const o = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom'



}

function findLang(arg) {
    for (list in o) {
        if (arg === list) {
            console.log(o[list])
        }
    }
    if (arg !== list) {
        console.log(o.english)
    }
    if (arg !== list) {
        console.log(o.czech)
    }
    if (arg !== list) {
        console.log(o.danish)
    }
}
findLang('danish')