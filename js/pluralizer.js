
const thing = 'walrus'
const count = 2

//i rufuse to account for plurals that change to "i", like octopi. :p

if (count >  1) {
    if (thing[thing.length-1] !== 's') {
    console.log(`${count} ${thing}s are attacking you!!`)
    } else {
        console.log(`${count} ${thing}es are attacking you!!`)
    }
} else if (count === 1) {
    console.log(`You see a ${thing}!`)
} else {
    console.log(`There's nothing here...`)
}
