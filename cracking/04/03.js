// Given a sorted (increasing order) array, write an algorithm to create a binary tree with minimal height.

// Since the list is sorted, we know that the lowest and highest elements would be leaves.
// Furthermore, binary tree nodes only have two children, one smaller and one bigger.

// We can bisect the array into sub-arrays and continually build the tree down.

function generateSortedArray(length) {
  var array = [];
  for (var i = 0; i < length; i++) {
    array.push(Math.round(Math.random().toFixed(2) * 100));
  }
  array.sort();
  return array;
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
  }

  set left(value) {
    this.left = new BinaryTreeNode(value);
  }  

  set right(value) {
    this.right = new BinaryTreeNode(value);
  }
}

function generateBinaryTree(sortedArray, currentNode) {
  if (sortedArray.length === 0) return;


  var midwayIndex = sortedArray.length / 2;
  var leftArray = sortedArray.slice(0, midwayIndex);
  var rightArray = sortedArray.slice(midwayIndex);

  console.log(leftArray, parentNode.left);
  console.log(rightArray, parentNode.right);

  generateBinaryTree(leftArray);
  generateBinaryTree(rightArray);
}

generateBinaryTree(generateSortedArray(5));