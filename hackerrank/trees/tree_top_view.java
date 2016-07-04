// https://www.hackerrank.com/challenges/tree-top-view

/*
   class Node
       int data;
       Node left;
       Node right;
*/
void top_view(Node root) {
  trasverse(root, true);
  trasverse(root.right, false);
}

void trasverse(Node node, boolean isGoingLeft) {
  if (node == null) return;
  if (!isGoingLeft) printData(node.data);
  trasverse(isGoingLeft ? node.left : node.right, isGoingLeft);
  if (isGoingLeft) printData(node.data);
}

void printData(int data) {
  System.out.print(String.valueOf(data) + " ");
}