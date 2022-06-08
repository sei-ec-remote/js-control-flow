// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

// Requirements

// Your program should have a variable to store the age (an integer between 0 and 20)
// For the age categories, you may use whatever aging scale you'd like


const age = 19;

// this is somewhat better than what i had before and i'm crying slightly less
switch (true) {
    case (age < 0):
        console.log("You don't exist yet.");
        break;
    case (age >= 0 && age < 2):
        console.log("You are an infant.");
        break;
    case (age >= 2 && age < 5):
        console.log("You are a toddler.");
        break;
    case (age >= 5 && age < 10):
        console.log("You are a child.");
        break;
    case (age >= 10 && age < 13):
        console.log("You are a preteen.");
        break;
    case (age >= 13 && age < 18):
        console.log("You are a teen.");
        break;
    case (age >= 18 && age < 20):
        console.log("You are a young adult.");
        break;
    default:
        console.log("You're too old for this program to handle!");
}