// let age = 7;

// if (age >= 0 && age <= 3) {
//   console.log("infant");
// } else if (age <= 6) {
//   console.log("toddler")
// } else if (age <= 9) {
//   console.log("child")
// } else if (age <= 12) {
//   console.log("preteen")
// } else if (age <= 19) {
//   console.log("teen")
// } else if (age === 20) {
//   console.log("young adult");
// } else {
//   console.log("Please pick a number between 0 and 20");
// }

const age = 7;

switch (true) {
  case age >= 0 && age <= 3:
    console.log('infant')
    break;
  case age <= 6:
    console.log('toddler')
    break;
  case age <= 10:
    console.log('child')
    break;
  case age <= 12:
    console.log('preteen')
    break;
  case age <= 19:
    console.log('teen')
    break;
  case age === 20:
    console.log('young adult')
    break;
  default:
    console.log('Please pick a number between 0 and 20')
}