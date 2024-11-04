const birthYears = [2005, 1995, 2010, 1980, 2003, 1970];
const currentYear = 2024;

const adults = birthYears
  .map((year) => currentYear - year)
  .filter((age) => age >= 18);

console.log(adults);
