
let age = null
// To test code
// age = Math.floor(Math.random() * 20)

if((age > 0) && (age < 2)) {
    console.log('Age: ' + age + ' Category: Infant');
} else if ((age >= 2) && (age <= 4)) {
    console.log('Age: ' + age + ' Category: Toddler');
} else if ((age >= 5) && (age <= 9)) {
    console.log('Age: ' + age + ' Category: Child');
} else if ((age >= 10) && (age <= 12)) {
    console.log('Age: ' + age + ' Category: Preteen');
} else if ((age >= 13) && (age <= 17)) {
    console.log('Age: ' + age + ' Category: Teen');
} else if ((age >= 18) && (age < 20)) {
    console.log('Age: ' + age + ' Category: Young Adult');
} else {
  console.log('Input is invalid. Please enter an age between 0 and 20.');
}
