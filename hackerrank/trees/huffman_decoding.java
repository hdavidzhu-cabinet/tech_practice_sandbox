// https://www.hackerrank.com/challenges/tree-huffman-decoding

/*
class Node
  public  int frequency; // the frequency of this tree
  public  char data;
  public  Node left, right;
*/

void decode(String S, Node root) {
  Node currentNode = root;
  for (int i = 0; i < S.length(); i++) {
    char digit = S.charAt(i);
    currentNode = digit == '0' ? currentNode.left : currentNode.right;
    if (currentNode.data != '\0') {
      System.out.print(currentNode.data);
      currentNode = root;
    }
  }
}