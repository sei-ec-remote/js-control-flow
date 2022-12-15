// Write a program that will print the age category, given a variable with an age. 
// Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", 
// for an age that is an integer between 0 and 20.

// Requirements
// * Your program should have a variable to store the age (an integer between 0 and 20)
// * For the age categories, you may use whatever aging scale you'd like

let age = Math.floor((Math.random() * 20));

let scale = {
    infant: [0,1],
    toddler: [2,3],
    child: [4,5,6,7,8,9,10],
    preteen: [11,12],
    teen: [13,14,15,16,17,18,19],
    young_adult: 20,
}

// Logs randomly generated age to console
console.log("Age: ", age)

for (key in scale) {

    for (let i = 0; i < scale[key].length; i++) {

        if (age === scale[key][i]) {

            console.log(`You are a ${key}.`);

        }
        
    }

}
 
