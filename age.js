// ### age.js
// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

let age = 17.8

if (age <= 1) {
    console.log('infant')
} else if (age < 4) {
    console.log('toddler')
} else if (age < 10) {
    console.log('child')
} else if (age < 13) {
    console.log('preteen')
} else if (age < 18) {
    console.log('teen')
} else if (age <= 20) {
    console.log('young adult')
}