Plural
// Write a program that starts like...
 
// ```js
// let thing = "cat";
// let count = 5;
// ```
 
// and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". Change `thing` to different values to test your code!
 
// **Requirements**
 
// - Your program should pluralize the word based on an integer (`count`)
 
let animal = "doggo";
let count = 2;
 
if (count > 1) {
  console.log(animal + "s"); //should I be using interpolation here?????
} else {
  console.log(animal);
}
 
let count = 1;
let animal = "frog";
 
if (count > 1) {
  console.log(animal + "s");
} else {
  console.log(animal);
}