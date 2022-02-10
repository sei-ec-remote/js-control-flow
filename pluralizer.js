Plural
// Write a program that starts like...

// ```js
// let thing = "cat";
// let count = 5;
// ```

// and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". Change `thing` to different values to test your code!

// **Requirements**

// - Your program should pluralize the word based on an integer (`count`)

let animal1 = "doggo";
let count1 = 2;

if (count1 > 1) {
  console.log(animal1 + "s"); //should I be using interpolation here?????
} else {
  console.log(animal1);
}

let count2 = 1;
let animal2 = "frog";

if (count2 > 1) {
  console.log(animal2 + "s");
} else {
  console.log(animal2);
}
