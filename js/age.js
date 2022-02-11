const age = 21
if (age === 0) {
    console.log("If you are less than one year old, you're an infant.")
} else if (age > 0 && age <= 2) {
    console.log("If you are between 1 and 2 years old, you're a toddler.")
} else if (age >= 3 && age <= 8) {
    console.log("If you are between 3 and 8 years old, you're a child.")
} else if (age >= 9 && age <= 12) {
    console.log("If you're between 9 and 12 years old, you're a preteen.")
} else if (age >= 13 && age <= 17) {
    console.log("If you're between 13 and 17 years old, you're a teenager.")
} else if (age >= 18 && age <= 20) {
    console.log("If you're between 18 and 20 years old, you're a young adult.")
} else {
    console.log("If you're older than 20, you're outside the scope of this project!")
}
