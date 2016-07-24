static void StairCase(int n) {
  for (int i = 0; i < n; i++) {
    int whiteSpaceCount = n - 1 - i;
    for (int j = 0; j < whiteSpaceCount; j++) {
      System.out.print(' ');
    }
    for (int k = 0; k <= i; k++) {
      System.out.print("#");
    }
    System.out.println("");
  }
}
