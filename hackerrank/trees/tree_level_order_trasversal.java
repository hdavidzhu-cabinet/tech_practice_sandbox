// https://www.hackerrank.com/challenges/tree-level-order-traversal

/*
class Node
  int data;
  Node left;
  Node right;
*/

void LevelOrder(Node node) {
  if (node == null) return;
  List<Node> level = new LinkedList<Node>();
  level.add(node);
  LevelOrder(level);
}

void LevelOrder(List<Node> currentLevel) {
  List<Node> nextLevel = new LinkedList<Node>();
  for (Node node : currentLevel) {
    if (node == null) continue;
    System.out.print(String.valueOf(node.data) + " ");
    nextLevel.add(node.left);
    nextLevel.add(node.right);
  }
  if (nextLevel.size() > 0) LevelOrder(nextLevel);
}