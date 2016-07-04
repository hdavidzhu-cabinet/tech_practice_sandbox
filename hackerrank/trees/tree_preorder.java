// https://www.hackerrank.com/challenges/tree-preorder-traversal

/* you only have to complete the function given below.
Node is defined as

class Node {
    int data;
    Node left;
    Node right;
}

*/

void preOrder(Node root) {
    if (root == null) { return; }
    // Visit.
    System.out.print(String.valueOf(root.data) + " ");
    // Go left.
    preOrder(root.left);
    // Go right.
    preOrder(root.right);
}
