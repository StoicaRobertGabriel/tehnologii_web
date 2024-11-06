const compress = (a, b = true) => {
  if (typeof a !== "string" || typeof b !== "boolean") {
    throw new Error("InvalidType");
  }
  if (a === "") {
    return a;
  } else {
    let result = [];
    if (b !== false) {
      result.push(a[0]);
      let count = 1;
      for (let i = 1; i < a.length; i++) {
        if (a[i] === a[i - 1]) {
          count++;
        } else {
          result.push(count, a[i]);
          count = 1;
        }
      }
      result.push(count);
    } else {
      // a2b1
      for (let i = 1; i < a.length; i += 2) {
        if (i % 2) {
          for (let j = 0; j < parseInt(a[i]); j++) {
            result.push(a[i - 1]);
          }
        } else {
          result.push(a[i]);
        }
      }
    }
    return result.join("");
  }
};

module.exports = compress;
