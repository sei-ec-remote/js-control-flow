function agecategory(inputAge){
    switch (true){
        case (0 <= inputAge <= 1):
            return "infant";
            break;
        case (1 < inputAge <= 2):
            return "toddler";
            break;    
        case (2 < inputAge <= 3):
            return "child";
            break;       
        case (3 < inputAge <= 4):
                return "preteen";
                break;
        case (4 < inputAge <= 5):
            return "teen";
            break;
        case (5 < inputAge <= 1):
            return "young adult";
            break;       
        default:
            return "ya messed up";      
}
}


console.log(agecategory(2));