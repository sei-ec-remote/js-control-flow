const kidsAge = 20;
//assining infant as under 1
if (kidsAge < 1) {
  console.log("Infant");
  //toddler as under 3 and above 1
} else if (kidsAge > 1 && kidsAge <= 3) {
  console.log("Todddler");
} 
//under 10 and above 4 as child
else if (kidsAge >= 4 && kidsAge <= 10) {
    console.log("Child.");
  } 
  // 11 and 12 as preteen 
  else if (kidsAge >= 11 && kidsAge <= 12) {
    console.log("Preteen")}
    //and all accordingly
  else if (kidsAge >= 13 && kidsAge <= 15) {
    console.log("Teen.");
  } 
  else if (kidsAge >= 16 && kidsAge <= 17) {
    console.log("Young.");
  } 
else {
  console.log("Adult.");
}