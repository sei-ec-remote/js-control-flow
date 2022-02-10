let age = 6

switch (age) {
    case 0:
      console.log(`You are ${age} years old. You are infant`)      
      break;
    case 1:
    case 2:
    case 3:
    case 4:
        console.log(`You are ${age} years old. You are todler`)     
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log(`You are ${age} years old. You are child`)     
        break;
    case 10:
    case 11:
    case 12:
        console.log(`You are ${age} years old. You are a preteen`)     
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log(`You are ${age} years old. You are a teen`)     
        break;
    case 18:
    case 19:
    case 20:
        console.log(`You are ${age} years old. You are a young adult`)     
        break;
     default:
        console.log(`You are ${age} years old. You are an adult`)
}        