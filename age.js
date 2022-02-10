//### age.js
//Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

//**Requirements**
//* Your program should have a variable to store the age (an integer between 0 and 20)
//* For the age categories, you may use whatever aging scale you'd like


//answer

for (age = 0; age <= 20; age++){
    if (age <= 1){
        console.log("You're an infant!")
    } else if (age <= 4){
        console.log("You're a toddler!")
    } else if (age <= 9){
        console.log("You're a child!")
    } else if (age <= 12){
        console.log("You're a preteen!")
    } else if (age <= 18){
        console.log("You're a teen!")
    } else if (age <= 20){
        console.log("You're a young adult!")
    }
}