let languages = ["en", "fr", "de", "jp", "kr"]
let language = languages[Math.floor(Math.random() * languages.length)] 

if (language == "en") {
    console.log("Hello World!")
} else if (language == "fr") {
    console.log("Bonjour Le Monde!")
} else if (language == "de") {
    console.log("Hallo Welt!")
} else if (language == "jp") {
    console.log("こんにちは世界！")
} else if (language == "kr") {
    console.log("안녕하세요 세계입니다!")
}