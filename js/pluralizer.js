let thing = 'cat';
let count = 5;
function pluralizeWord(singularWord, pluralWord, count) {
    return count > 1 ? pluralWord : singularWord;
  }

  console.log(count, pluralizeWord("cat", "cats", count));
  console.log(count, pluralizeWord("dog", "dogs", count));
  console.log(count, pluralizeWord("girl", "girls", count));
  console.log(count, pluralizeWord("boy", "boys", count));
  console.log(count, pluralizeWord("lion", "lions", count));