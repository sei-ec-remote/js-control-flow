// pluralizer.js
// Write a program that starts like...
//      let thing = 'cat';
//      let count = 5;
// and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". 
// Change `thing` to different values to test your code!

// Requirements
// * Your program should pluralize the word based on an integer (`count`)


let thing = 'cat';

let count = Math.floor(Math.random() * 5);


if (count < 2) {
    console.log(`Singular ${thing}. All on his own.`)
}
if (count >= 2 ) {
    console.log(`Many ${thing}s! ${count} of them.`)
}