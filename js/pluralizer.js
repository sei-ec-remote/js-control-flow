let thing = 'porcupine';
let count = 17;

function makePlural() {
    if(count === 1) {
        console.log(count+" "+thing);
    } else {
        const lettersOfThing = thing.split("");
        lettersOfThing.push("s");
        const pluralThing = lettersOfThing.join("");
        console.log(count+" "+pluralThing);
    }
}

makePlural();