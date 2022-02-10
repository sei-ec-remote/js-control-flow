let thing = 'cat';
let count = 5;

//BELOW IS A METHOD THE MAKES THE THING PLURAL IF THE COUNT IS GREATER THAN 1

const pluralizer = (thing, count) => {
    if (count > 1){
        return(thing+'s')
    }else{
        return(thing)
    }
}

//TESTING THE METHOD BELOW

console.log(pluralizer(thing,count))

console.log(pluralizer('house',1))

console.log(pluralizer('pumpkin', 100))


