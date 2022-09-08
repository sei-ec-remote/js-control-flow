// Write a program that will print the age category, given a variable with an age. 
//Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", 
//for an age that is an integer between 0 and 20.
//Requirements
//Your program should have a variable to store the age (an integer between 0 and 20)
//For the age categories, you may use whatever aging scale you'd like

let age = 0
for (let age=0; age < 21; age++){
if (age <2 ){
    console.log('Infant, Aww such a a cute baaybe')
}else if(age < 5){
    console.log('Toddler, or tiny Destructar')
}else if(age < 11){
    console.log('Child, go play outside and get off the screen')
}else if(age < 13){
    console.log('Preteen, we get it adults are lame, you are cool')
}else if(age < 19){
    console.log('Teen, everybody sucks and you just cannot wait to be an adult ')
}else if( age < 21){
    console.log('young adult, or YA for short')
}else{
    console.log('You are outside the age range, try again!')
}
}