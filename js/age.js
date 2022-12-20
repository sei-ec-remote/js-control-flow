let ageCategory = "infant";
let age = 13;

/*
    console.log("The" + ageCategory + "is" + age + "years old")

    let ageCategory = "toddler"
    let age = "4";
        console.log("The" + ageCategory + "is" + age + "years old")
    
    let ageCategory = "child";
    let age = "8";
    
        console.log("The" + ageCategory + "is" + age + "years old")
    
    let ageCategory = "preteen";
    let age = "12";
    
        console.log("The" + ageCategory + "is" + age + "years old")
    
    let ageCategory = "teen";
    let age = "16";
    
        console.log("The" + ageCategory + "is" + age + "years old")
    
    let ageCategory = "young adult";
    let age = "20";
    
        console.log("The" + ageCategory + "is" + age + "years old")
 
   

        let ageCategory = ["infant", "toddler", "child", "preteen", "teen", "young adult"] ;
        let age = ["0", "4", "8", "12", "16", "20"];

     */

        if (age === 0) {
            console.log("The infant is " + age + " years old")
        }   
        else if (age < 4){
            console.log("The toddler is " + age + " years old")
        }
        else if (age < 8){
            console.log("The child is " + age + " years old")
        }
        else if (age < 12){
            console.log("The preteen is " + age + " years old")
        }
        else if (age < 17){
            console.log("The teen is " + age + " years old")
        }
        else if (age < 20){
            console.log("The young adult is " + age + " years old")
        }

