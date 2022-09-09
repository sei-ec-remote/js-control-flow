const isBigger = (i, j) => i > j;

const a = 7;
const b = 3;
let text = '';
if (isBigger(a, b)) {
  text = `${a} is bigger than ${b}.`;
} else {
  text = `${a} is not bigger than ${b}.`;
}
text;
//or
console.log(text);