class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return.this.arr.length;
  }

  toArray() {
    // your implementation
    return.this.arr;    
  }

  sort(indices) {
    // your implementation
    var tempList = [];
      indices.sort();
      for (var i = 0; i < indices.length; i++) {
          tempList.push(this.arr[indices[i]]);
      }
      tempList.sort(this.comparator);
      for (var i = 0; i < tempList.length; i++) {
          this.arr[indices[i]] = tempList[i];
      }
  }

  setComparator(compareFunction) {
    // your implementation
     this.comparator = compareFunction;
  }
}

module.exports = Sorter;
