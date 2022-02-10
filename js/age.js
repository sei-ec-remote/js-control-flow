
let age = 9
if (age <= 2) {
    console.log("infant");
} else if (age > 2 && age < 6) {
    console.log("toddler");
} else if (age > 5 && age < 9) {
    console.log("child");
} else if (age > 8 && age < 11) {
    console.log('preteen');
} else if (age > 12 && age < 18) {
    console.log('teen');
} else if (age > 17 && age < 21) {
    console.log('young adult');
}


const age2 = 20;
switch (age2) {
    case 1:
    case 2:
        console.log("infant");
        break;
    case 3:
    case 4:
    case 5:
        console.log("toddler");
        break;
    case 6:
    case 7:
    case 8:
        console.log("child");
        break;
    case 9:
    case 10:
        console.log('preteen');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log('teen');
        break;
    case 18:
    case 19:
    case 20:
        console.log('young adult')
        break;
}
