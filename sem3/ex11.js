const getFilterObjects = (arr, obj) => {
  return arr.filter((element) => {
    for (const key in obj) {
      if (!(key in element) || element[key] !== obj[key]) {
        return false;
      }
    }
    return true;
  });
};

const laptops = [
  {
    brand: "MSI",
    ram: 16,
    cpu: "i5",
  },
  {
    brand: "Acer",
    ram: 8,
    cpu: "i7",
  },
  {
    brand: "Asus",
    ram: 16,
    cpu: "Ryzen",
  },
  {
    brand: "Apple",
    ram: 8,
    cpu: "M2",
  },
  {
    brand: "Asus",
    ram: 16,
    cpu: "i9",
  },
];

const results = getFilterObjects(laptops, { brand: "Asus", ram: 16 });
console.log();
