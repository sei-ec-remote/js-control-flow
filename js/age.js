// // Write a program that will print the age category, given a
// variable with an age.
// Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an
// age that is an integer between 0 and 20.

// Requirements Your program should have a variable to store the age (an integer between 0 and 20)
// For the age categories, you may use whatever aging scale you'd like

const age = 18;

if (age < 1) {
  console.log("infant");
} else if (age <= 3) {
  console.log("toddler");
} else if (age <= 8) {
  console.log("child");
} else if (age <= 12) {
  console.log("preteen");
} else if (age <= 15) {
  console.log("teen");
} else if (age <= 18) {
  console.log("young adult");
}
