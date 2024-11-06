const average = (arr) => {
  return arr.reduce((prev, current) => prev + current) / arr.length;
};

const array = [7, 3, 9, 1, 6, 4];

console.log(average(array));
