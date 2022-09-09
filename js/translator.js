let translate = prompt("Type 'ger', 'fr', or 'es' for translation!")


function translationMsg(){
  let en = "Hello World!"
  let ger = "Hallo Welt!"
  let fr = "Bonjour le monde!"
  let es = "Hola Mundo!"

if(translate === ger){
    alert(`${en} in German is ${ger}`);
}else if (translate === fr){
    alert(`${en} in French is ${fr}`);
}else if (translate === es){
    alert(`${en} in Spanish is ${es}`);
}else{
  alert(`Translation not available`);
}
}

translationMsg();









// let translate = prompt("Type 'ger', 'fr', or 'es' for translation!")
// let en = "Hello World!"
// let ger = "Hallo Welt!"
// let fr = "Bonjour le monde!"
// let es = "Hola Mundo!"
// if(translate === ger){
//     alert(`${en} in German is ${ger}`);
// }else if (translate === fr){
//     alert(`${en} in French is ${fr}`);
// }else if (translate === es){
//     alert(`${en} in Spanish is ${es}`);
// }




