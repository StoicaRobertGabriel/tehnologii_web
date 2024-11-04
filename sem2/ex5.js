function intercalare(array1, array2) {
  if (array1.length !== array2.length && array1.length !== 0) {
    return -1;
  }
  let array3 = [];
  for (var i = 0; i < array1.length; i++) {
    array3.push(array1.charAt(i));
    array3.push(array2.charAt(i));
  }
  return array3;
}
console.log(intercalare("aceg", "bdfh").join(""));
