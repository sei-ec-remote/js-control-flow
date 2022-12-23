// // Write a program that will print the age category, given a
// variable with an age.
// Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an
// age that is an integer between 0 and 20.

// Requirements Your program should have a variable to store the age (an integer between 0 and 20)
// For the age categories, you may use whatever aging scale you'd like

const age = 20;

if (age => 0 && age <=3) {
  console.log("infant");
} else if (age > 3 && age <= 5) {
  console.log("toddler");
} else if (age > 8 && age <= 10) {
  console.log("child");
} else if (age > 12 && age <= 15) {
  console.log("preteen");
} else if (age > 16 && age <= 18) {
  console.log("teen");
} else if (age > 18 && age <= 20) {
  console.log("young adult");
} else {
  console.log('You may be older than 20')
}




// switch statement

let age2 = 20;
switch (4) {
  case 4:
    console.log('infant is 3 years old');
    break;
  case 8:
    console.log('toddler is 8 years old');
    break;

    console.log(`No one is an adult`);
}
