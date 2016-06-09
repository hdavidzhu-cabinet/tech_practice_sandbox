// GIVEN =======================================================================

// From https://www.interviewcake.com/question/javascript/balanced-binary-tree

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

// ITERATIVE SOLUTION ==========================================================

function isSuperBalanced(node) {

  var isBalanced = true;
  var historicalLeafDepth = -1;

  var currentTrasversalDepth = 1;
  var nodeCount = 0;

  var currentNode = node;

  while (isBalanced) {

    nodeCount += 1;

    if (currentNode.left != null) {
      currentNode = currentNode.left;
      currentTrasversalDepth += 1;
    } else if (currentNode.right != null) {
      currentNode = currentNode.left;
      currentTrasversalDepth += 1;
    } else {
      if (historicalLeafDepth = -1) {
        historicalLeafDepth = currentTrasversalDepth;
      } else if (historicalLeafDepth != currentTrasversalDepth || nodeCount <= 2) {
        isBalanced = false;
      }
    }
  }

  return isBalanced;
}

// Basic testing.

var inode = new BinaryTreeNode(1);
console.log(isSuperBalancedByRecursion(inode));

inode.left = new BinaryTreeNode(1);
console.log(isSuperBalancedByRecursion(inode));

inode.right = new BinaryTreeNode(1);
console.log(isSuperBalancedByRecursion(inode));

inode.left.left = new BinaryTreeNode(1);
console.log(isSuperBalancedByRecursion(inode));

// RECURSIVE SOLUTION. =========================================================

var historicalLeafDepth;
var nodeCount;

function isSuperBalancedByRecursion(node, _depth) {

  var depth = _depth != undefined ? _depth : 0;

  if (depth == 0) {
    historicalLeafDepth = -1;
    nodeCount = 1;
  }

  nodeCount += 1;

  // Base case.
  if (node.left == null && node.right == null) {
    if (historicalLeafDepth == -1) {
      historicalLeafDepth = depth;
    } else if (historicalLeafDepth != depth) {
      return false;
    }
    if (nodeCount <= 2) return false;
    return true;
  }

  // Trasversal.
  var result;
  if (node.left != null) {
    result = isSuperBalancedByRecursion(node.left, depth + 1);
  }
  if (node.right != null) {
    result = isSuperBalancedByRecursion(node.right, depth + 1);
  }
  return result;
}

// Basic testing.

var rnode = new BinaryTreeNode(1);
console.log(isSuperBalancedByRecursion(rnode));

rnode.left = new BinaryTreeNode(1);
console.log(isSuperBalancedByRecursion(rnode));

rnode.right = new BinaryTreeNode(1);
console.log(isSuperBalancedByRecursion(rnode));

rnode.left.left = new BinaryTreeNode(1);
console.log(isSuperBalancedByRecursion(rnode));
