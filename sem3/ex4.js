const sumDiv = (arrNum, div) => {
  let sum = 0;
  for (let i = 0; i < arrNum.length; i++) {
    if (!(arrNum[i] % div)) {
      sum += arrNum[i];
    }
  }
  return sum;
};

//varianta doar cu reduce
// const sumDiv = (arrNum, div) => {
//   return arrNum.reduce((sum, num) => {
//     return num % div === 0 ? sum + num : sum;
//   }, 0);
// };

// //varianta cu map si reduce
// const sumDiv = (arrNum, div) => {
//   return arrNum
//     .map((num) => (num % div === 0 ? num : 0)) // Replace non-divisible numbers with 0
//     .reduce((sum, num) => sum + num, 0); // Sum up all values
// };

let arrayNumbers = [1, 5, 8, 9, 4, 27, 3];
let divisor = 3;

console.log(sumDiv(arrayNumbers, divisor));
