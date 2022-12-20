let en = 'Hello World!';
let fr = 'Bonjour Monde!';
let es = 'Hola Mundo!';
/*
{
    console.log(fr)
}
*/
if (Math.random(en) <0.4) {
    console.log("English translation is " + en)
}   
else if (Math.random(fr) <0.6){
    console.log("The French translation of " + en + " is " + fr)
}
else if (Math.random(es) <0.8){
    console.log("The Spanish translation of " + en + " is " + es)
}
/*
{
    console.log(en)
}
{
    console.log(es)
}

*/
