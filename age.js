//Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

//Requirements:Your program should have a variable to store the age (an integer between 0 and 20)
//For the age categories, you may use whatever aging scale you'd like
let age = 2
if (age >= 20) {
  console.log("Adult");
} else if (age <= 2) {
  console.log("Baby");
} else if (age <= 5) {
  console.log("Toddler");
} else if (age <= 12) {
  console.log("Child");
} else if (age <= 19) {
  console.log("Teenager");
} else if (age <= 20) {
  console.log("Adult");
}