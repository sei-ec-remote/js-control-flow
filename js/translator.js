let greeting = "Hello World"

const es = "Hola"
const cant = "Ni Hao"
const fr = "Bonjour"


function pickOne(greeting) {
    if (greeting === es) {
        console.log(es)
    } else if (greeting === cant) {
        console.log(cant)
    } else console.log(fr)
}


pickOne(cant);