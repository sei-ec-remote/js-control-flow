// const prompt = require ('prompt-sync')();
// let translate = prompt(`Type "ger", "fr", or "es" for translation!`)


const translationMsg = (translate) => {
  let en = "Hello World!"
  let ger = "Hallo Welt!"
  let fr = "Bonjour le monde!"
  let es = "Hola Mundo!"

if(translate === "german"){
    return `${en} in German is ${ger}`;
}else if (translate === "french"){
   return `${en} in French is ${fr}`;
}else if (translate === "spanish"){
    return `${en} in Spanish is ${es}`;
}else{
  return `Translation not available`;
}
}

console.log(translationMsg("german"))









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




