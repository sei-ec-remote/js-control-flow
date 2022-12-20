//pluralizer.js
//Write a program that starts like...


let thing = 'cat';
let count = 5;
const pluralizer =(name, num) => {
    // takes two things as parameter
    // check if count is more than 1
    if (num>1){
        console.log(`${num} ${name}s`)
    }
    else{
        console.log(`${num} ${name}`)
    }
    //if count more than one add s to the end of name}
}
pluralizer("dog",1);

//and outputs the pluralized form of the word, 
//depending on what count is. 
//For example, "5 cats"or "1 dog". Change 
//thing to different values to test your code!

//equirements

//Your program should pluralize the word based on an integer (count)
