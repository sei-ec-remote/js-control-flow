// ### age.js
// Write a program that will print the age category, given a variable with an age.
//  Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", 
//  for an age that is an integer between 0 and 20.

// **Requirements**
// * Your program should have a variable to store the age (an integer between 0 and 20)
// * For the age categories, you may use whatever aging scale you'd like

const age = 9

// if (age <= 1) {
//     console.log(age + ":Infant")
// } else if (age <= 2) {
//     console.log(age + ":Toddler")
// } else if (age <= 8) {
//     console.log(age + ":Child")
// } else if (age <= 12) {
//     console.log(age + ":Preteen")
// } else if (age <= 19) {
//     console.log(age + ":Teen")
// } else if (age <= 20) {
//     console.log(age + ":Young Adult")
// } else {
//     console.log("You\'re old!")
// }


//I had trouble trying to do this by grouping the age ranges into single cases.
//I tried case (age <= 12) but it did not work
switch (age) {
    case 0:
    case 1:
        console.log(age + ":Infant");
        break;
    case 2:
        console.log(age + ":Toddler");
        break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
        console.log(age + ":Child");
        break;
    case 9:
    case 10:
    case 11:
    case 12:
        console.log(age + ":Preteen");
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        console.log(age + ":Teen");
        break;
    case 20:
        console.log(age + ":Young Adult");
        break;
    default:
        console.log("You\'re old!");
}