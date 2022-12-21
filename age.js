//age.js homework. Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.
const age = 21
  
    if (age > 20) {
      console.log("You are not playing by the rules of this homework! Please pick an age between 0 and 20.")
    }else if (age > 16 && age <= 20) {
      console.log("You are a young adult!")
      
    } else if (age > 12 && age <= 16) {
      console.log("You are a teen!")
      
    }else if (age > 10 && age <= 12) {
      console.log("You are a pre-teen!")
      
    }else if (age >3 && age <= 10) {
      console.log("You are a child.")
      
    }else if (age > 1 && age <= 3) {
      console.log("You are a toddler.")
      
    } else if (age <2) { 
        console.log("You are an infant")
    }