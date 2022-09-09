const ageCatagory = ["infant", "toddler", "child", "preteen", "teen", "young adult"];
let age = 34;
let displayCatagory = null;
let  art = 'a ';

if (age >= 0 && age <=20) {
    if (age < 2){
        displayCatagory = ageCatagory[0]
     art = 'an '
    } else if (age < 5){
        displayCatagory = ageCatagory[1]
    } else if (age < 11){
        displayCatagory = ageCatagory[2]
    } else if (age < 13){
        displayCatagory = ageCatagory[3]
    } else if (age < 18){
        displayCatagory = ageCatagory[4]
    } else {
        displayCatagory = ageCatagory[5]
    } 
    console.log('At age ',age,', one is considered ',art,displayCatagory)
} else{
    console.log(age,' is an invalid age \n','Age must be between 0 and 20 inclusive')
}
