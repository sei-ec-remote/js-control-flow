// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", 
// for an age that is an integer between 0 and 20.

// **Requirements**
// * Your program should have a variable to store the age (an integer between 0 and 20)
// * For the age categories, you may use whatever aging scale you'd like

// CODE BELOW:
    
const ageInfant = [
    0,
    1
    ]
const ageToddler = [
    2,
    3,
    4
    ]
const ageChild = [
    5,
    6,
    7,
    8,
    9,
    10,
    ]
const agePreteen = [
    11,
    12
    ]
const ageTeen = [
    13,
    14,
    15,
    16,
    17,
    18,
    ]
const ageYoungAdult = [
    19,
    20
    ]
let ageGiven = 3
if (ageGiven <= 2) {
        console.log("infant " + [ageInfant])
    } else if (ageGiven <= 4) {
        console.log("toddler " + [ageToddler])
    } else if (ageGiven <= 10) {
        console.log("child " + [ageChild])
    } else if (ageGiven == 12) {
        console.log("preteen " + [agePreteen])
    } else if (ageGiven <= 18) {
        console.log ("teen " + [ageTeen])
    } else if (ageGiven <= 20) { 
        console.log("young adult " + [ageYoungAdult])
    }
