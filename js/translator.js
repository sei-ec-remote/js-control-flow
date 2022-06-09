let es ,fr, en , kor;

en = "Hello World!"
es = "Hola Mundo"
fr = "Bonjour le monde"
kor = "안녕하세요"

var user = process.argv[2];

if (user === 'es'){
    console.log(`${en} in Spanish is ${es}`)
}
if (user === 'fr'){
    console.log(`${en} in French is ${fr}`)
}

if (user ==='kor'){
    console.log(`${en} in Korean is ${kor}`)
}