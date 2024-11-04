function occurences(text, charr) {
  let count = 0;
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === charr) {
      count++;
    }
  }
  return count;
}

// let occurences2 = (text, charr) => text.split(charr).length - 1;
