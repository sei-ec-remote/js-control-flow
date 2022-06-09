// Done

// Age ranges:
// Infant 0-1
// Toddler 2-3
// Child 4-8
// Preteen 9-12
// Teen 13-19
// Young Adult 20+

let age = 6

if (age === 0 || age === 1){
    console.log("Infant")
} else if (age === 2 || age === 3){
    console.log("Toddler")
} else if (age > 3 && age < 9) {
    console.log("Child")
} else if (age > 8 && age < 13) {
    console.log("Preteen")
} else if (age > 12 && age < 20) {
    console.log("Teen")
} else {
    console.log("Young Adult")
}