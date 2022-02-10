let age = 0
if (age === 20) {
    console.log('young adult')
} else if (age <= 19 && age >= 13) {
    console.log('teen')
} else if (age >= 10 && age <= 12) {
    console.log('preteen')
} else if (age < 10 && age >= 4) {
    console.log('child')
} else if (age <= 3 && age >= 1) {
    console.log('toddler')
} else {
    console.log('infant')
}