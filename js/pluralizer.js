//Write a program that starts like...

//let thing = 'cat';
//let count = 5;
//and outputs the pluralized form of the word, depending on what count is. For example, "5 cats" or "1 dog". Change thing to different values to test your code!

//citation for endsWith() functionality to assess what the ending of the word is https://www.w3schools.com/jsref/jsref_endswith.asp 

//citation for .slice() functionality to remove the last characters to pluralize correctly https://masteringjs.io/tutorials/fundamentals/remove-last-character 

let thing
let count

function pluralizer(thing, count){
  if(typeof thing === 'string' && typeof count === 'number'){
    if(thing.endsWith('us') === false && (thing.endsWith('ies') || thing.endsWith('s') || thing.endsWith('i') || thing === 'mice' ||  thing === 'geese')){
      console.log(`I truly cannot believe you have ${count} ${thing}. However, I can believe ${thing} is already plural, so you don't need the pluralizer today, regardless of how many you have! If I'm wrong, reach out to my developer so they can improve my code!`)
    } else if(count >= 2){
      if(thing.endsWith('y') === true){
        console.log("The plural of " + thing + " is " + thing.slice(0, -1) + "ies. Holy cow, " + count + " is a lot of " + thing.slice(0, -1) + "ies!")
      } else if(thing.endsWith('us') === true){
        console.log("The plural of " + thing + " is " + thing.slice(0, -2) + "i. Holy cow, " + count + " is a lot of " + thing.slice(0, -2) + "i!")
      } else if(thing === 'goose'){
        console.log(`This is a hard one! The plural of ${thing} is geese! Holy cow, ${count} is a lot of geese!`)
      } else if(thing === 'mouse'){
        console.log(`This is a toughie! The plural of ${thing} is mice! Holy cow, ${count} is a lot of mice!`)
      } else if(thing === 'sheep' || thing === 'deer'){
        console.log(`Now this is a good one! Plural and singular forms of ${thing} are both ${thing}. I am obliged to tell you by my creator, though I think the aforementioned fact is more interesting than the number of ${thing} that you have: Holy cow, ${count} is a lot of ${thing}!`)
      } else{
        console.log(`The plural of ${thing} is ${thing}s. Holy cow, ${count} is a lot of ${thing}s!`)
      }
    } else if(count === 1){
      console.log(`There is only ${count} ${thing}, therefore no pluralizer is needed!`)
    } else{
      console.log(`There isn't a high enough count of ${thing} to give you anything!`)
    }
  } else if(typeof thing !== 'string' || typeof count !== 'number'){
    console.log("Please only enter a 'thing' in string format and 'count' as an integer")
  }
}

let myThing = 'rats'
let myCount = 1000
pluralizer(myThing.toLowerCase(), myCount)

//I know that I use different versions of " " and ` ` or ' ' - this was just for testing out the different ways to represent strings & use variables that we learned in class today. I will not do this intentionally going forward!