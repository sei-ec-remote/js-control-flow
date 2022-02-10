// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.
 
// **Requirements**
 
// - Your program should have a variable to store the age (an integer between 0 and 20)
// - For the age categories, you may use whatever aging scale you'd like
let yourAge = 5
 
if (age > 0 && < 1) {
    console.log("You're a baby!")
}
else if (age > 1 && < 3) {
    console.log("You're a toddler")
}
else if (age > 3 && < 5) {
    console.log("You're a child")
}
else if (age > 5 && < 12) {
    console.log("You're a pre-teen")
}
else if (age > 12 && < 18) {
    console.log("You're a teen")
}
else if (age > 18 && < 20) {
    console.log("You're a young adult")
}
else {
    console.log("That's not between zero and twenty!")
}
