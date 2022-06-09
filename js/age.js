const age=Math.floor(Math.random()*21);
console.log("Age: "+age);
if(age>0 && age<=1){
    console.log("Infant")
}else if(age>1 && age<=4){
    console.log("Toddler")
}else if(age>4 && age<=8){
    console.log("Child")
}else if(age>8 && age<=13){
    console.log("Preteen")
}else if(age>13 && age<=16){
    console.log("Teen")
}else{
    console.log("Young adult")
}
