let thing = 'cat';
let count = Math.floor((Math.random() * 2)+1)
// and outputs the pluralized form of the word, depending on what count is. For example, "5 cats" or "1 dog". Change thing to different values to test your code!
// Requirements
// Your program should pluralize the word based on an integer (count)
if (count > 1)
    console.log(`${count} ${thing}s`)
else
    console.log(`${count} ${thing}`)