// This program will pluralize the form of a word depending on what the count is.
// So for example:  5 cats, 0 dogs, 1 elephant, 6 birds

let thing = 'cat';
let count = 1;

if (count === 0 || count > 1) {
    console.log(`${count} ${thing}` + `s`);
} else if (count == 1) {
    console.log(`${count} ${thing}`);
}