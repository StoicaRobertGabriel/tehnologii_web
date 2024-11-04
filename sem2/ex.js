function checkDiv(n, div) {
  if (n % div) {
    return false;
  } else {
    return true;
  }
}
console.log(checkDiv(10, 2));
console.log(checkDiv(10, 3));
