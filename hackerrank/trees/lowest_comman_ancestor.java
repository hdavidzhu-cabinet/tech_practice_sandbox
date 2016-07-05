// https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor

/* Node is defined as :
  class Node
  int data;
  Node left;
  Node right;
*/

static Node lca(Node root,int v1,int v2) {
  // Figure out which one is the min and max.
  int min = v1 <  v2 ? v1 : v2;
  int max = v1 >= v2 ? v1 : v2;

  // If min and max diverge at current node, return the node as LCA.
  if (min <= root.data && root.data <= max) {
    return root;

  // Otherwise, let's keep trasversing.
  } else {
    return lca(root.data > max ? root.left : root.right, min, max);
  }
}
