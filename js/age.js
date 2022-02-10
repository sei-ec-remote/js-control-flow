//assign variable 
let age = 8

if (age < 1) {
    console.log("Hello, I am an infant")
} else if (age >= 1 && age <= 2) {
    console.log("Hello, I am a toddler")
} else if (age > 2 && age <= 5) {
    console.log("Hello, I am a child")
} else if (age > 5 && age < 13) {
    console.log("Hello, I am a preteen")
} else if (age >= 13 && age < 18) {
    console.log("Hello, I am a teen")
} else if (age >= 18 && age <= 20) {
    console.log("Hello, I am a young adult")
}
//try switch...
let age = 0
switch (age) {
    case "age < 1" :
        let message = "Hello, I am an infant"
        console.log(message);
        break;
}
