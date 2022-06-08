let thing = 'cat';
let count = 1;

function pluralizer(thing,count) {
    if (count > 1) {
        console.log(`${thing}s`);
    } else {
        console.log(`${thing}`)
    }
}

pluralizer(thing,count);