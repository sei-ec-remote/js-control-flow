let age = 16;

if (age >= 0 && age < 1) {
    console.log('Category: infant');
} else if (age >= 1 && age < 3) {
    console.log('Category: toddler');
} else if (age >= 3 && age < 9) {
    console.log('Category: child');
} else if (age >= 9 && age < 12) {
    console.log('Category: preteen');
} else if (age >= 12 && age < 18) {
    console.log('Category: teen');
} else if (age >= 18 && age <= 20) {
    console.log('Category: young adult');
} else {
    console.log('Please pick an age between 0 and 20.')
}
