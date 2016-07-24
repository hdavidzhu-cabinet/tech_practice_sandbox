import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    String S = in.next();
    int errors = 0;
    char[] sos = new char[]{'S', 'O', 'S'};

    for (int i = 0; i < S.length(); i++) {
      if (sos[i % 3] != S.charAt(i)) {
        errors++;
      }
    }

    System.out.println(errors);
  }
}
