let thing = 'cat';
let count = 1;

function pluralize(object, number){
    if (number == 1){
        return (number.toString() + ' ' + object);
    }
    else{
        return (number.toString() + ' ' + object + 's');
    }
}

console.log(pluralize(thing, count));