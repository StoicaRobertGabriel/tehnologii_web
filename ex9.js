const sampleText = "the quick brown fox jumps ove rthe lazy dog";

const charFreq = (text) => {
  const charrs = text.split("");
  const result = {};
  for (let charr of charrs) {
    if (charr in result && charr !== " ") {
      result[charr]++;
    } else if (charr !== " ") {
      result[charr] = 1;
    }
  }
  return result;
};

console.log(charFreq(sampleText));
