function getAge() {
    let age = Math.floor(Math.random() * 20)
if (age >= 0 && age <= 1) {
    console.log("You are an infant!")
} else if (age >= 2 && age <= 4) {
    console.log("You are a toddler!")
} else if (age >= 5 && age <=10) {
    console.log("You are a child!")
} else if (age >= 11 && age <= 12) {
    console.log("You are a preteen!")
} else if (age >= 13 && age <= 16) {
    console.log ("You are a teen!")
} else if (age >= 17 && age <= 20) {
    console.log ("You are a young adult!")
}
}
getAge()
