
let age = 15

if ((age > 0) && ( age < 3)){
    console.log("infant")
}
else if ((age >= 3) && ( age < 6)){
    console.log("toddler")
}
else if ((age >= 6) && ( age < 9)){
    console.log("child")
}
else if ((age >= 9) && ( age < 11)){
    console.log("preteen")
}
else if ((age >= 11) && ( age < 16) ) {
    console.log("teen")
}
else if( (age >= 16) && ( age <= 20)){
    console.log("young adult")
}
else{
    console.log("adult")
}

 age = 30
switch(true){
    case age >= 16:
        console.log("young adults");
        break;
    case age >= 11:
        console.log("teen")
        break;
        break;
    case age >= 9:
        console.log("preteen")
        break;
    case age >= 6:
        console.log("child")
        break;
    case age >=3:
        console.log("toddler")
        break
    case age >=0:
        console.log("infant")
        break;
    default:
        console.log("error")
}