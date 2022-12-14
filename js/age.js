let age;

function ageCategory(age) {
  if (age <= 3) {
    console.log("infant");
  } else if (age <= 6) {
    console.log("toddler")
  } else if (age <= 9) {
    console.log("child")
  } else if (age <= 12) {
    console.log("preteen")
  } else if (age <= 19) {
    console.log("teen")
  } else {
    console.log("young adult");
  }

  ageCategory(10);
}
