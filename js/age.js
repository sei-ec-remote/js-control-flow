
let age = 7

if (age > 0 && age <= 3) {
  console.log(`You are ${age}, meaning you are an infant`)
} else if  (age > 3 && age <= 10) {
  console.log(`You are ${age}, meaning you are a child`)
} else if (age > 10 && age <= 12) {
  console.log(`You are ${age}, meaning you are a preteen`)
} else if (age > 12 && age <= 17) {
  console.log(`You are ${age}, meaning you are a teen`)
} else if (age > 17 && age <= 20) {
  console.log(`You are ${age}, meaning you are a young adult`)
} else {
  console.log('Your age is not within the parameters')
}