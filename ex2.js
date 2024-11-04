function charDiff(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return -1;
  } else {
    let length = arr1.length;
    let diff = 0;
    for (let i = 0; i < length; i++) {
      let found = false;
      for (let j = 0; j < length; j++) {
        if (arr1[i] == arr2[j]) {
          found = true;
        }
      }
      if (found === false) {
        diff++;
      }
    }
  }
}
