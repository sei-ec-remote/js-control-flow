
const readline = require("Select language: en, fr, de");

const language = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  input.question("Select language: en, fr, de", function (language) {
    console.log(`You have selected ${language}.`);
  });

if(`${language}`) = fr; {
    console.log(" Bonjour Monde! ")
} else if {
    (`${language}`) = en; 
        console.log(" Hello World! ")
} else {
    (`${language}`) = de;
        console.log(" Hallo Welt! ")
}
    

