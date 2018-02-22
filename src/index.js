class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.length = 0;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
    this.length++;
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return.this.length;
  }

  toArray() {
    // your implementation
    return.this.arr;    
  }

  sort(indices) {
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
