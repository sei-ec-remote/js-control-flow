//Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

let age; 

function ageIsANumber(age) {
  if(typeof age === 'number'){
      if(age < 0){console.log('Sorry, you are not yet born. Come back when you are born.')}
      else if(age < 3){console.log('infant')}
      else if(age < 5){console.log('toddler')}
      else if(age < 13){console.log('child')}
      else if(age < 20){console.log('teen')}
      else if(age < 21){console.log('young adult')}
      else if(age > 20){console.log('Sorry you are ' + (age - 20) + ' years too old to qualify for these age ranges.')}
    }
  else{console.log('Please only provide a number between 0 and 20.')}
};

age = 50;
ageIsANumber(age);






