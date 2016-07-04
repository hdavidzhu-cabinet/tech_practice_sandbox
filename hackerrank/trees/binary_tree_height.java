// https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree

/*
class Node
  int data;
  Node left;
  Node right;
*/

int height(Node root) {
  return getHeight(root, 0);
}

int getHeight(Node node, int height) {
  if (node == null) return height - 1;
  height++;
  int leftHeight = getHeight(node.left, height);
  int rightHeight = getHeight(node.right, height);
  return Math.max(leftHeight, rightHeight);
}
