let age = 13

if (age > 0 && age < 2) {
    console.log("infant")
} else if (age >= 2 && age <= 4) {
    console.log("toddler")
} else if (age >=5 && age <= 10) {
    console.log("child")
} else if (age >= 11 && age <= 12 ) {
    console.log("preteen")
} else if (age >= 13 && age <= 18) {
    console.log("teen")
} else if (age > 18 && age <= 20) {
    console.log("young adult")
} else {
    console.log("Sorry, that's not really an age we're working with right now.")
}

// BONUS:

switch (age) {
    case 1:
        console.log(`infant`)
        break
    case 2:
    case 3:
    case 4:
        console.log(`toddler`)
        break
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log(`child`)
        break
    case 11:
    case 12:
        console.log(`preteen`)
        break
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        console.log(`teen`)
        break
    case 20:
        console.log(`young adult`)
    default:
        console.log(`Sorry, that's not really an age we're working with right now.`)
}