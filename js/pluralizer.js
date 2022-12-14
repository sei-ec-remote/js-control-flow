// Write a program that outputs the pluralized form of the word, depending on what count is. For example, "5 cats" or "1 dog". Change thing to different values to test your code!

let thing = 'cat';
let count = 5;

console.log(count === 1 ? `${count} ${thing}` : `${count} ${thing}s`);