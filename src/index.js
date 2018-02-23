class Sorter {
  constructor() {
    this.dataArray = [];
    this.compareFunction = function(a, b){return a - b};
  }

  add(element) {
    this.dataArray.push(element);
  }

  at(index) {
    return this.dataArray[index];
  }

  get length() {
    return this.dataArray.length;
  }

  toArray() {
    return this.dataArray;
  }

  sort(indices) {
    indices.sort(function(a, b){return a - b});
    let tmpArray=[];
    for(let i = 0; i < indices.length; i++) {
      tmpArray.push(this.dataArray[indices[i]]);
    }
  
    tmpArray.sort(this.compareFunction);

    for(let i = 0; i < indices.length; i++) {
      this.dataArray[indices[i]] = tmpArray[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;