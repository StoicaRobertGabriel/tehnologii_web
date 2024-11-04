// const getTotalArea = (squareDimensions) => {
//   return squareDimensions
//     .map((side) => {
//       return side * side;
//     })
//     .reduce((prev, current) => {
//       return prev + current;
//     }, 0);
// };

const getTotalArea2 = (squareDimensions) =>
  squareDimensions
    .map((side) => side * side)
    .reduce((prev, current) => prev + current, 0);

const squareDimensions = [3, 5, 12, 3, 5, 3]; //acestea sunt laturile unor patrate

// const result = getTotalArea(squareDimensions);
const result2 = getTotalArea2(squareDimensions);
// console.log("result: ", result);
console.log("result: ", result2);
