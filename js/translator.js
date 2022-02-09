// translates hello world based on users input language code (prompt)

let lang=prompt("Please select language code to translate Hello World to. es for Spanish, fr for French, it for Italian, pr for Portuguese, ge for German, and sw for Swedish");

if (lang==="es") {
    console.log("Hello World in Spanish: Hola Mundo");
}
else if (lang==="fr") {
    console.log("Hello World in French: Bonour le Monde");
}
else if (lang==="it") {
    console.log("Hello World in Italian: Ciao Mondo");
}
else if (lang==="pr") {
    console.log("Hello World in Portuguese: Olá Mundo");
}
else if (lang==="ge") {
    console.log("Hello World in German: Hallo Welt");
}
else if (lang==="sw") {
    console.log("Hello World in Swedish: Hej Världen");
}
else {
    console.log("Please enter a language code mentioned in prompt!")
}