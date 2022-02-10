//### pluralizer.js
//Write a program that starts like...

//```js
//let thing = 'cat';
//let count = 5;
//```
//and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". Change `thing` to different values to test your code!

//**Requirements**
//* Your program should pluralize the word based on an integer (`count`)

//answer

let wordToPluralize = 'game';
let count =  3;

if (count > 1 || count < 0){
    console.log(`${count} ${wordToPluralize}s`)
} else {
    console.log('1 ' + wordToPluralize)
};