// ### age.js
// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

// **Requirements**
// * Your program should have a variable to store the age (an integer between 0 and 20)
// * For the age categories, you may use whatever aging scale you'd like

function ageCategory(age) {
    if (age >= 18 && age < 21) {
        console.log('Young Adult')
    }
    else if (age > 15 && age < 18) {
        console.log('Teen')
    }
    else if (age >= 12 && age < 15) {
        console.log('Preteen')
    }
    else if (age >= 5 && age < 12) {
        console.log('Child')
    }
    else if (age >= 2 && age < 5) {
        console.log('Toddler')
    }
    else if (age >= 0 && age < 2) {
        console.log('Infant')
    }
    else {
        console.log('Not born yet or too old.....')
    }
}

ageCategory(1)