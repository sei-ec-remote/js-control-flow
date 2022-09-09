let fahrenheit = 80;
let indicatorUnit = 'c'; // 'c' for celsius or 'k' for kelvin

if (indicatorUnit === 'c') {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    let cTwoDecimals = celsius.toFixed(2);
    console.log(`${fahrenheit} degress in Fahrenheit is ${cTwoDecimals} degrees in Celsius.`
    );
} else if (indicatorUnit === 'k') {
    let kelvin = ((fahrenheit + 459.67) * 5) / 9;
    let kTwoDecimals = kelvin.toFixed(2);
    console.log(`${fahrenheit} degress in Fahrenheit is ${kTwoDecimals} degrees in Kelvin.`
    );
} else {
    console.log('Not a valid indicator unit!');
}
