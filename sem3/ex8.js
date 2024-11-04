// array.reduce((accumulator, currentValue, currentIndex, array) => {
//     // reducer logic
// }, initialValue);
const sampleArray = [1, 2, 3, 4, 5];

// const reduce = (array, transformation, initialValue) => {
//   result = 0;
//   for (let element of array) {
//     result.transformation();
//   }
// };
function reduce(array, callback, initialValue) {
  // Determine if initialValue is provided
  let accumulator = initialValue;
  let startIndex = 0;

  // If initialValue is not provided, set accumulator to the first element
  // and start iteration from the second element (index 1)
  if (accumulator === undefined) {
    if (array.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[0];
    startIndex = 1;
  }

  // Iterate over the array, applying the callback function
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

console.log(reduce(sampleArray, (prev, current) => prev + current, 0));
