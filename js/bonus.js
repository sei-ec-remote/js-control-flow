// // define the age and assign it a value
// let age = 14

// // if age is less than one, print 'Infant'
// if (age < 1){
//     console.log("Infant")

// // if age is less than or equal to 2, print 'Toddler'
// } else if (age <= 2) {
//     console.log("Toddler")

//  // if age is less than or equal to 9, print 'Child'    
// } else if (age <= 9) {
//     console.log("Child")

// // if age is less than or equal to 12, print 'Preteen'    
// } else if (age <= 12) {
//     console.log("Preteen")

// // if age is less than or equal to 17, print 'Teen'
// } else if (age <= 17) {
//     console.log("Teen")

// // if age is any other number, print 'Young adult'
// } else {
//     console.log("Young adult")
// }

let age = 2

switch (age) {
    case (age < 1):
        console.log("Infant")
        break
    case (age <= 2):
        console.log("Toddler")
        break
    case (age <= 9):
        console.log("Child")
        break
    case (age <= 12):
        console.log("Preteen")
        break
    case (age <= 17):
        console.log("Teen")
        break
    default:
    console.log("Young adult")
}