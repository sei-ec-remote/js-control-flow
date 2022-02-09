let age = 99

if (age <= 1) {
    console.log('You are an infant')
} else if (age < 3 && age > 1) {
    console.log('You are a toddler')
} else if (age < 9 && age >= 3) {
    console.log('You are a child')
} else if (age < 13 && age >= 9) {
    console.log('You are a pre-teen')
} else if (age < 20 && age >= 13) {
    console.log('Your are a teenager')
} else {
    console.log('You are an adult')
}
