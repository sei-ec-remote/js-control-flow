// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

// Requirements

// Your program should have a variable to store the age (an integer between 0 and 20)
// For the age categories, you may use whatever aging scale you'd like


const age = 500;

// this is a terrible use case for switches and i'm crying slightly
switch (age) {
    case 0:
    case 1:
        console.log("You are an infant.");
        break;
    case 2:
    case 3:
    case 4:
        console.log("You are a toddler.");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log("You are a child.");
        break;
    case 10:
    case 11:
    case 12:
        console.log("You are a preteen.");
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("You are a teen.");
        break;
    case 18:
    case 19:
    case 20:
        console.log("You are a young adult.");
        break;
    default:
        console.log("You are too mysterious for this program. Perhaps you're a vampire, like Matt?");
}