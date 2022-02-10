let age = 4

if (age >= 0 && age <4) {
    console.log(`This person is ${age} and therefor is an infant.`)
} else if (age >= 4 && age < 10) {
    console.log(`This person is ${age} and therefor is a child.`)
} else if (age === 11 || age === 12) {
    console.log(`This person is ${age} and therefor is a preeteen.`)
} else if (age >= 13 && age < 20) {
    console.log(`This person is ${age} and therefor is a teen.`)
} else if (age === 20) {
    console.log(`This person is ${age} and therefor is a young adult.`)
}