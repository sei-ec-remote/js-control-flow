
function ageChecker(age) {
    let ageOut = ""
        if (age < 0) {
            ageOut = "n unborn person."
        } else if (age <= 2) {
            ageOut = "n Infant.";
        } else if (age <= 5) {
            ageOut = " Toddler.";
        } else if (age <= 10) {
            ageOut = " Child.";
        } else if (age <= 12) {
            ageOut = " Preteen.";
        } else if (age <= 18) {
            ageOut = " Teen.";
        } else if (age <= 20) {
            ageOut = " Young Adult.";
        } else if (age > 20) {
        ageOut = "n old person.";
    } else {
        ageOut = " person who transends space and time."
    }
    console.log("You are a"+ageOut);
}

ageChecker(7);