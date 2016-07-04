class SuffixTree {

  constructor(inputString) {
    this.root = new SuffixTreeNode();
    for (var i = 0; i < inputString.length; i++) {
      var suffix = inputString.substring(i);
      root.insertString(suffix, i);
    }
  }

  getIndexes(inputString) {
    return this.root.getIndexes(inputString);
  }
}

class SuffixTreeNode {

  // this.children;

  constructor() {

  }

  insertString() {

  }
}
