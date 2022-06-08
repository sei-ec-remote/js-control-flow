let tempF = parseInt(
    prompt("Please enter a number for temperature in Fahrenheit")
  );
  let tempC = parseInt((tempF - 32) * (5 / 9));
  let tempK = parseInt((tempF - 32) * (5 / 9) + 273.15);
  let unitChoice = prompt(
    "Please type K to convert to Kelvin or C to convert to Celcius"
  );
  
  function convertTemp(tempF) {
    if (unitChoice.toLowerCase() === "k") {
      alert(`${tempF} degrees Fahrenheit is ${tempK} degrees Kelvin`);
      console.log(tempK);
    } else if (unitChoice.toLowerCase() === "c") {
      alert(`${tempF} degrees Fahrenheit is ${tempC} degrees Celcius`);
      console.log(tempC);
    } else alert("Wrong entry, please try again");
  }
  
  convertTemp(tempF);
  