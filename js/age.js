// Write a program that will print the age category, given a variable with an age.Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

// Requirements

// Your program should have a variable to store the age(an integer between 0 and 20)
// For the age categories, you may use whatever aging scale you'd like
    let age=10
    if (age < 2) {
        console.log("You are", age + " years old. You are considered an infant")
    } else if (age < 5) {
        console.log("You are", age + " years old. You are considered an toddler")
    } else if (age < 10) {
        console.log("You are", age + " years old. You are considered an child")
    } else if (age < 13) {
        console.log("You are", age + " years old. You are considered an preteen")
    } else if (age < 18) {
        console.log("You are", age + " years old. You are considered an teen")
    } else {
        console.log("You are", age + " years old. You are considered a young adult")
    }
