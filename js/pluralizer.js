let thing = 'dog';
let count = 5;

if (count >= 0 && count <= 1) {
    console.log(`${count} ${thing}`);
} else if (count >= 2) {
    console.log(`${count} ${thing}s`);
} else {
    console.log('Not a valid number!');
}