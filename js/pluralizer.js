// pluralizer.js
// Write a program that starts like...

// let thing = 'cat';
// let count = 5;
// and outputs the pluralized form of the word, depending on what count is. For example, "5 cats" or "1 dog". Change thing to different values to test your code!

// Requirements

// Your program should pluralize the word based on an integer (count)

let thing = "integral";
let count = 1;

// this is actually a wildly complicated task, but for my own well-being i'll assume that
// you're not trying to ask about the absolute linguistic disaster of english plural forms
// and instead are going for a nice, well-behaved coding exercise
console.log(thing + (count > 1 ? "s" : ""));