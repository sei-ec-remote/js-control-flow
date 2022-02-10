let thing = 'cat';
let count = 10;
// set condtiion with > operator to allow for pluralization in the case 
//count is greater than 1
if (count > 1){
    console.log(`I own ${count} ${thing}` + "s")
}
else {
    console.log(`I own one ${thing}`)
}