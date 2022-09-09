let thing = 'cat';
let count = 1;
let plural = false;

if (count > 1){
    plural = true;
}

let result = count + ' ' + thing + (plural?'s':'');

console.log(result);

//what about goose and deer? gooses and deers of course!