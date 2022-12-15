let num1 = 15
let num2 = 10
if (typeof num1 === "number" && typeof num2 ==="number"){
    if (num1>num2) {
        console.log(`We got a ${num1} and a ${num2}, and you better believe ${num1} is larger`)
    } else if (num1<num2) {
        console.log(`We got a ${num1} and a ${num2}, and you better believe ${num2} is larger`)
    } else {
        console.log(`We got a ${num1} and a ${num2},and golly gee, they're equal!`)
    }
} else {
    console.log("Numbers only, please")
}
