
// age.js
// Write a program that will print the age category, 
// given a variable with an age. Display either "infant", 
// "toddler", "child", "preteen", "teen", or "young adult", 
// for an age that is an integer between 0 and 20.

// Requirements

// Your program should have a variable to store the age (an integer 
// between 0 and 20)
// For the age categories, you may use whatever aging scale you'd 
// like

// program needs to identify groups of numbers and label them as "infant", 
// "toddler", "child", "preteen", "teen", or "young adult"

// need to use if statements

// if a person is between this age and this age, then console.log the right category

let age
function judgeAge(age){
if(age<= 1){
    return "infant";
} else if (age> 1 && age<=3){
    return "toddler";
} else if (age>3 && age<=9){
    return "child";
} else if (age>9 && age<=12){
    return "preteen";
} else if (age>12 && age<=19){
    return "teen";
} else if (age=20){
    return "young adult";
}
}

for(let i=0; i<21; i++){
    console.log(judgeAge(i))
}



