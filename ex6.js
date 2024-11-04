const checkPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

if (process.argv.length < 3) {
  console.log("not enough parameters");
} else {
  //   console.log("fine");
  console.log(checkPrime(parseInt(process.argv[2])));
}
