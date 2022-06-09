const age=Math.floor(Math.random()*21);
console.log("Age: "+age);
switch(age){
    case 0: case 1:
        console.log("Infant");
        break;
    case 2: case 3: case 4:
        console.log("Toddler");
        break;
    case 4: case 5: case 6: case 7: case 8:
        console.log("Child");
        break;
    case 9: case 10: case 11: case 12: case 13:
        console.log("Preteen");
        break;
    case 14: case 15: case 16:
        console.log("Teen");
        break;
    default:
        console.log("Young adult");
}