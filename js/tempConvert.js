
function cToF(celsius) 
{
    //created two variables for celcius and fahrenheii
  var cTemp = celsius;
  //fahrenheit to celcius conversion formuls
  var cToFahr = cTemp * 9 / 5 + 32;

  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);