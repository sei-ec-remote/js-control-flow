// Write a program that starts like...

// let thing = 'cat';
// let count = 5;
// and outputs the pluralized form of the word, depending on what count is. 
// For example, "5 cats" or "1 dog". Change thing to different values to test 
// your code!

//function with two parameters that returns a string

// Requirements

// Your program should pluralize the word based on an integer (count)

let thing = 'cat';
let count = 5;

function pluralizer(count, thing){
   if(count>1){
    thing= thing + "s"
   } 
    return `${count} ${thing}`
}
console.log(pluralizer(5, "cat"))