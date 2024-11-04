const formatString = (text, noun, adj) => {
  let modified = text;
  for (let i = 0; i < 2; i++) {
    if (modified.indexOf("{noun}") !== -1) {
      modified = modified.replace("{noun}", noun);
    }
    if (modified.indexOf("{adjectiv}") !== -1) {
      modified = modified.replace("{adjectiv}", adj);
    }
  }
  return modified;
};

console.log(formatString("a {noun} is {adjectiv}", "horse", "pretty"));
