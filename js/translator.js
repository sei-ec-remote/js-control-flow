let languageCode = 'IT' //Please enter language code: ES for spanish, FR for french, EN for english or IT for italian

function translate(languageCode) {
  if (languageCode.toLowerCase() === 'es') {
    console.log('Hola, Mundo!');
  } else if (languageCode.toLowerCase() === 'fr') {
    console.log('Bonjour, le Monde!');
  } else if (languageCode.toLowerCase() === 'en') {
    console.log('Hello, World!');
  } else if (languageCode.toLowerCase() === 'it') {
    console.log('Ciao, Mondo!');
  } else console.log('Please try again and select one of the available options.');
}

translate(languageCode);