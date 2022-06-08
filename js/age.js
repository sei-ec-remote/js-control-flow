// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

// Requirements

// Your program should have a variable to store the age (an integer between 0 and 20)
// For the age categories, you may use whatever aging scale you'd like


let age = 199;

if (age < 0) {
    console.log("You don't exist yet.");
}
else if (age < 2) {
    console.log("You are an infant.");
}
else if (age < 5) { 
    console.log("You are a toddler.");
}
else if (age < 10) {
    console.log("You are a child.");
}
else if (age < 13) { 
    console.log("You are a preteen.");
}
else if (age < 18) {
    console.log("You are a teen.");
}
else if (age < 20) {
    console.log("You are a young adult.");
}
else {
    console.log("You are too old for this program to handle!");
}