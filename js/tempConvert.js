let x = 32
let y = 0

const convertTemp = (TempInx) => {
    y = (9 * TempInx + 160)/5
    console.log(y)
}

convertTemp(x)
convertTemp(y)
console.log(x + ' ' + 'degrees Fahrenheit' +  ' ' + y  + ' ' + 'degrees Celcius')

