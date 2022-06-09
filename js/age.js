// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.
// Requirements
// Your program should have a variable to store the age (an integer between 0 and 20)
// For the age categories, you may use whatever aging scale you'd like

const age = Math.floor(Math.random() * 101)

if (age < 2)
    console.log('category: infant')
else if (age < 2)
    console.log('category: ')
else if (age < 6)
    console.log('category: toddler')
else if (age < 10)
    console.log('category: child')
else if (age < 13)
    console.log('category: preteen')
else if (age < 20)
    console.log('category: teen')
else
    console.log('category: young adult')

console.log(age)