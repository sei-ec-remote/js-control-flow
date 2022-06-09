// ### pluralizer.js
// Write a program that starts like...

// ```js
// let thing = 'cat';
// let count = 5;
// ```
// and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". Change `thing` to different values to test your code!

// **Requirements**
// * Your program should pluralize the word based on an integer (`count`)

// CODE BELOW:

let animalName = "cat";
let count = 6;

if (count > 1) {
    console.log(`${animalName}s`);
    } else if (count == 1) {
        console.log(animalName);
    }