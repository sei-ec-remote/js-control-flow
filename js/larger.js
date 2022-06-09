const numbers = [2,3,4,5,6]
const num1 = [Math.floor(Math.random()* numbers.length)]
const num2 = [Math.floor(Math.random() * numbers.length)]
if (num1 > num2) {
    console.log ("The larger number of " + num1 + "and" + num2 + " is " + num1)
}
else if (num1 < num2) {
    console.log("The larger number of " + num1 + " and " + num2 + " is " + num2)
}