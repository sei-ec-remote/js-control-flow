function compareNumb(a, b){
    if(Number.isInteger(a) && Number.isInteger(b)){
        if (a > b){
        return "The larger number of " + a + " and " + b + " is " + a;
    }
    else if (b > a){
        return "The larger number of " + a + " and " + b + " is " + b;
    }
    else{
        return "They equal"
    }}
    else{
        return"error";
    }
}


console.log(compareNumb(7, "a"));

