// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen",
// or young adult", for an age that is an integer between 0 and 20.


let age = 20
if (age <= 1) {
    console.log("This is an infant.")
} else if (age <= 5) {
    console.log("This is a toddler.")
} else if (age <= 10) {
    console.log("This is a child.")
} else if (age <= 13) {
    console.log ("This is a preteen.")
} else if (age <= 18) {
    console.log("This is a teen.")
} else if (age <= 20) {
    console.log("This is a young adult.")
}

