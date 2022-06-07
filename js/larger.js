function biggerNum(a, b) {
    if (a > b) {
        console.log("The larger number of " + a + " and " + b + " is " + a + "." )
    } else if (a < b) {
        console.log("The larger number of " + a + " and " + b + " is " + b + "." )
    } else if (a == b) {
        console.log(a + " and " + b + " are equal.")
    } else {
        console.log("Please enter numerical values only.")
    }
}

biggerNum(15, 21);