//set an age between 0 and 20
let age = 19

//loop that measures the variable and provides the applicable age group.
if (age < 1) {
    console.log("Since you are " + age + " you are an infant.")
} else if (age >= 1 && age < 4 ) {
    console.log("Since you are " + age + " you are a toddler.")
} else if (age >= 4 && age < 11) {
    console.log("Since you are " + age + " you are a child.")
} else if ( age >= 11 && age < 13) {
    console.log("Since you are " + age + " you are a preteen.")
} else if (age >= 13 && age < 20) {
    console.log("Since you are " + age + " you are a teenager.")
} else if (age === 20) {
    console.log("Since you are " + age + " you are a young adult.")
}else if (age > 20) {
    console.log("You are too old for this")
}