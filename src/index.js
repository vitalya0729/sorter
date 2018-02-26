class Sorter {
  constructor() {
    this.arr = []; 
    this.comparator = (a, b) => a - b;    
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
      let tempList = [];
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
   
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
