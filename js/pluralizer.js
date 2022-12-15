let thing = 'cat';
let count = 1;

if (count === 1) {
  console.log(`Yay, ${count} ${thing}`)
} else if (count > 1) {
  console.log(`Yay, ${count} ${thing}s`)
} else if (count === 0){
  console.log(`You poor thing, you have ${count} ${thing}s`)
} else {
  console.log(`You can't have ${count} ${thing}s`)
}

// I realize certain values for "thing" which break this but I figured that was outside the scope of the assignment.