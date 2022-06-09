let numberFirst = Math.floor(Math.random() * 100)
let numberSecond = Math.floor(Math.random() * 100) 
if (numberFirst > numberSecond) {
    console.log("The larger number of", numberFirst, "and", numberSecond, "is", numberFirst)
} else if (numberFirst < numberSecond) {
    console.log("The smaller number of", numberFirst, "and", numberSecond, "is", numberFirst)
}