// https://www.interviewcake.com/question/python/bst-checker
// Write a function to check that a binary tree is a valid binary search tree.

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};


// ANSWER ======================================================================

// It has to have a concept of a range it can be in.
// Left is smaller than node.value
// Right is bigger than node.value
// For the left, new node cares about the prior highest min.
// For the right, new node cares about the prior lowest max.

// BFS or DPS would be the same in this situation.
// Would one of them short circuit?

// At any child node, I need to know:
// What do I need to be bigger than? What do I need to be smaller than?

// function checkNode

// Four possible paths.

function isBinarySearchTree(node, min, max) {
  if (node.value < min || node.value > max) {
    return false;
  }

  // Leaf node.
  if (!node.left && !node.right) {
    return true;
  }

  var result;

  // Left available.
  if (node.left && !node.right) {
    result = isBinarySearchTree(node.left, min, node.value);
  }

  // Right available.
  if (!node.left && node.right) {
    result = isBinarySearchTree(node.right, node.value, max);
  }

  // Both available.
  if (node.left && node.right) {
    result = isBinarySearchTree(node.left, min, node.value) && isBinarySearchTree(node.right, node.value, max);  
  }

  return result;
}

var root = new BinaryTreeNode(5);
root.insertLeft(4).insertRight(4.9).insertLeft(4.1);
root.insertRight(6);

console.log(isBinarySearchTree(root));