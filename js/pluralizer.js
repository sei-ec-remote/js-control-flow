let thing = 'dogcat';

let count = 5;

if (count > 2) {
    console.log (`${count} ${thing}s`)
} else { 
    console.log(`1 ${thing}`)
} 

or 
 function plural (count,thing) {
     if (count !==1) {
         console.log(`${count} ${thing}s`)
     } else {
         console.log(`${count} ${thing}`)
     }
 }

 plural(count,thing);