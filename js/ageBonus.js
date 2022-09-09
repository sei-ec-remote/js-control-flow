let age = 34;
let category = undefined;
switch (true) {
    case (age < 2 ):
        category = 'infant';
        break;

    case (age < 5 ):
        category = 'toddler';
        break;

    case (age < 11) :
        category = 'child';
        break;

    case (age < 13) :
        category = 'preteen';
        break;
            
    case (age < 18) :
        category = 'teen';
        break;

    case (age < 20) :
        category = 'young adult';
        break;
    default:
        console.log(age,' is an invalid age \n','Age must be between 0 and 20 inclusive')                                
}
 if (category !=undefined){
    console.log('Age: ',age,'\n Age Category: ',category);
 };

 //Evil. took me forever to figure out that I could use a boolean as an expression.--but I was not about to type 21 expressions
 