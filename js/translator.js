function langTranslation(lang1, lang2) {
    let languages  = ["viet", "eng", "fren"];
    let vietnam = "Chao Ban";
    let english = "Hello There";
    let french = "Bonjour";
    for (let i = 0; i <languages.length; i++) {
        if (lang1 === languages[i]) {
            if (lang2 === languages[0]) {
                console.log(vietnam)
            } else if (lang2 === languages[1]) {
                console.log(english)
            } else if (lang2 === languages[2]) {
                console.log(french)
            } else {
                console.log("This language is not supported!")
            }
        }
    }
}
langTranslation("viet", "fren")