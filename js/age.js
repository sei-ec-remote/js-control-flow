let age = 5;

const ageGroups = ["infant","toddler","preteen","teen","young adult"];

if(age <= 1) {
    console.log("The "+ageGroups[0]+" is only "+age+".");
} else if(age > 1 && age <= 10) {
    console.log("The "+ageGroups[1]+" is only "+age+".");
} else if(age > 10 && age <= 12) {
    console.log("The "+ageGroups[2]+" is only "+age+".");
} else if(age > 12 && age <= 17) {
    console.log("The "+ageGroups[3]+" is only "+age+".");
} else {
    console.log("The "+ageGroups[4]+" is only "+age+".");
}
