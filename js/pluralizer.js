let thing = 'crab leg';
let count = 5;

const pluralizerFunc = () => {
    if (count > 1) {
        console.log(count + ' ' + thing + 's')
    } else {
        console.log(count + ' ' + thing)
    }
}

pluralizerFunc(thing, count)