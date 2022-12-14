const x = Math.floor(Math.random()*100);
const y = Math.floor(Math.random()*100);

let largerNumber = (x > y) ? x : y;

console.log(`The larger number of ${x} and ${y} is ${largerNumber}`);