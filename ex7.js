const fiboPos = (n) => {
  if (n < 1) {
    return -1;
  } else if (n < 3) {
    return 1;
  } else {
    arrayFibo = [1, 1];
    for (let i = 2; i < n; i++) {
      arrayFibo.push(arrayFibo[i - 2] + arrayFibo[i - 1]);
    }
    return arrayFibo[n - 1];
  }
};

if (process.argv.length < 3) {
  console.log("not enough parameters");
} else {
  //   console.log("fine");
  console.log(fiboPos(parseInt(process.argv[2])));
}
