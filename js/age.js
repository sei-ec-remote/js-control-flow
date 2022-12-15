let age =  21
if (age >=  0 && age <= 2) {    //0-2
    console.log("infant")
} else if(age >= 3 && age <=6) {    //3-6
    console.log("toddler")
}  else if(age >= 7 && age <=10) {   //7-10
    console.log("child")
} else if(age >= 11 && age <=14) {      //11-14
    console.log("preteen")
} else if(age >= 15 && age <=17) {      //15-17
    console.log("teen")
} else if(age >= 18 && age <=20) {      //18-20
    console.log("young adult")
} else if(age > 20) {       // > 20
    console.log("adult")
}else {         // < 0
    console.log("not born yet")
}