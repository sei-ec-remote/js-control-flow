let age  = 21
if (age > 0 && age <= 2) {
    console.log('infant')
} else if (age > 2 && age <= 5) {
    console.log('toddler')
} else if (age > 5 && age <= 10) {
    console.log('child')
} else if (age > 10 && age <= 13) {
    console.log('preteen')
} else if (age > 13 && age <= 18) {
    console.log('teen')
} else if (age > 18 && age <= 20) {
    console.log('young adult')
} else {
    console.log('age out of range')
}