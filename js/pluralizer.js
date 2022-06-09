//Write a program that starts like...

//```js
//let thing = 'cat';
//let count = 5;
//```
//and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". Change `thing` to different values to test your code!

//**Requirements**
//* Your program should pluralize the word based on an integer (`count`)
const counts = [1, 2, 3, 4, 5];

let thing = 'cat';
let count = Math.floor(Math.random() * counts.length) ;

if (count >= 2 ){
    console.log(count + thing + "s")
} else if (count ===0) {
    console.log(count + thing + "s")
} else {
    console.log(count + thing)
}
