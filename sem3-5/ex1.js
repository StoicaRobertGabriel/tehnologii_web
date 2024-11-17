class Stream {
  #value;
  #nextValue;
  static #count = 0;
  constructor(value, nextValue) {
    this.#value = value;
    this.#nextValue = nextValue;
    Stream.#count++;
  }
  get value() {
    return this.#value;
  }
  get next() {
    this.#value = this.#nextValue(this.value);
    return this.#value;
  }
  static get count() {
    return Stream.#count;
  }
}

class NextEvenInteger extends Stream {
  constructor(value) {
    super(value, (value) => {
      if (!(value % 2)) {
        return value + 2;
      } else {
        return value + 1;
      }
    });
  }
}

const nextEvenInteger = new NextEvenInteger(5);
for (let i = 0; i < 10; i++) {
  console.log(`nextEvenInteger[${i}] = ${nextEvenInteger.next}`);
}
