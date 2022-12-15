const age = 3

// if (age >= 18 && age <= 20) {
//     console.log("You are considered a young adult!  Get a job!!")
// } else if (age >= 13 && age < 18) {
//     console.log("You are considered a teen!  Get good grades!!")
// } else if (age >= 10 && age < 13) {
//     console.log("You are considered a preteen!  Get gud!!")
// } else if (age >= 5 && age < 10) {
//     console.log("You are considered a child!  Huzzah!!")
// } else if (age >= 2 && age < 5) {
//     console.log("You are considered a toddler!  So cuuuuuute!!")
// } else if (age >= 0 && age < 2) {
//     console.log("You are considered an infant!  Welcome to Earth!!")
// } else {
//     console.log("What are you even doing here?")
// }

switch (true) {
    case (age >= 0 && age < 2): 
        console.log("You are considered an infant!  Welcome to Earth!!")
        break
    case (age >= 2 && age < 5):
        console.log("You are considered a toddler!  So cuuuuuute!!")
        break
    case (age >= 5 && age < 10):
        console.log("You are considered a child!  Huzzah!!")
        break
    case (age >= 10 && age < 13):
        console.log("You are considered a preteen!  Get gud!!")
        break
    case (age >= 13 && age < 18):
        console.log("You are considered a teen!  Get good grades!!")
        break
    case (age >= 18 && age <= 20):
        console.log("You are considered a young adult!  Get a job!!")
        break
    default:
        console.log("Pick a number from 0 to 20!")
}