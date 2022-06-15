const numbers = [2, 3, 4, 5, 6]

const variable1 = [Math.floor(Math.random() * numbers.length)]
const variable2 = [Math.floor(Math.random() * numbers.length)]
if (variable1 > variable2) {
    console.log("The larger number of " + variable1 + " and " + variable2 + " is " + variable1)
} else if (variable2 < variable1){
    console.log (" The larger number of " + variable1 + " and " + variable2 + " is " + variable2)
}
