const dictionary = ["este", "minunat"];

const sampleText = "javascript este minunat";

const censor = (text, dictionary) => {
  let modified = text;
  for (const word of dictionary) {
    if (text.indexOf(word) !== -1) {
      let wordCensored = word;
      for (let i = 0; i < word.length; i++) {
        if (i !== 0 && i !== word.length - 1) {
          wordCensored = wordCensored.replace(wordCensored[i], "*");
        }
      }
      modified = modified.replace(word, wordCensored);
    }
  }
  return modified;
};
console.log(censor(sampleText, dictionary));
