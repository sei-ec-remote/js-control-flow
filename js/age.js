//made a variable for age
let age
age = 13
//infant
if (age <= 1){
    console.log('infant')
//toddler
} else if (age >=2 && age <= 3) {
    console.log('toddler')
//child
} else if (age >= 4 && age <=9) {
    console.log('child')
//preteen
} else if (age >= 10 && age <= 12) {
    console.log('preteen')
//teen
} else if (age >= 13 && age <= 17) {
    console.log('teen')
//young adult
} else if (age >= 18 && age <= 20) {
    console.log('young adult')
} else {
    console.log('too old or invalid')
}
