const f = 212

const convert = 'k'

let newTemp = null

let newUnit = null

if (convert === 'c') {
    newTemp = Math.round((f - 32) * (5/9)) 
    newUnit = 'Celcius'
} else if (convert === 'k') {
    newTemp = Math.round((f - 32) * (5/9) + 273)
    newUnit = 'Kelvin'
}

console.log(`${f} degrees Farenheit is ${newTemp} degrees ${newUnit}`)
