// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.
 
// **Requirements**
 
// - Your program should have a variable to store the age (an integer between 0 and 20)
// - For the age categories, you may use whatever aging scale you'd like
let yourAge = 5
 
if (yourAge > 0 && yourAge< 1) {           //Do you have to put the variable yourAge on both sides of the &&??
    console.log("You're a baby!")
}
else if (yourAge > 1 && yourAge< 3) {
    console.log("You're a toddler")
}
else if (yourAge > 3 && yourAge< 5) {
    console.log("You're a child")
}
else if (yourAge > 5 && yourAge< 12) {
    console.log("You're a pre-teen")
}
else if (yourAge > 12 && yourAge< 18) {
    console.log("You're a teen")
}
else if (yourAge > 18 && yourAge< 20) {
    console.log("You're a young adult")
}
else {
    console.log("That's not between zero and twenty!")
}
