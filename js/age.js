let age = 13


if (age>0 && age < 2){
    console.log("Infant")
} else if (age<=2 && age <= 3){
    console.log("Toddler")
} else if (age > 3 && age <= 10){
    console.log("Child")
} else if (age > 10 && age <=12){
    console.log("Preteen")
} else if (age > 12 && age <= 17){
    console.log("Teen")
} else if (age>17 && age <= 20){
    console.log("Young adult")
}

//refactored to switch

let newAge = 18

switch (newAge) {
    case 0:
    case 1:
        console.log('switch: infant');
        break;
    case 2:
    case 3:
        console.log('switch: toddler');
        break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('switch: child');
        break;
    case 11:
    case 12:
        console.log('switch: preteen');
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log('switch: teen');
        break;
    case 18:
    case 19:
    case 20:
        console.log('switch: young adult');
        break;
    default:
        break;   
}

