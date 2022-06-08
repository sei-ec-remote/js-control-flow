//let age = prompt("Please input a number between 0-20");
let age = 4; // Change the variable when running the program

if (age <= 1) {
    console.log(`A ${age} year old is an infant`);
} else if (age <= 4) {
    console.log(`A ${age} year old is a toddler`);
} else if (age <= 10) {
    console.log(`A ${age} year old is an child`);
} else if (age <= 12) {
    console.log(`A ${age} year old is a preteen`);
} else if (age <= 16) {
    console.log(`A ${age} year old is a teen`);
} else if (age <= 20) {
    console.log(`A ${age} year old is a young adult`);
} else console.log('You did not enter a number in the 0-20 range, goodbye.');