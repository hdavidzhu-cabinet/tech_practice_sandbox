// https://www.hackerrank.com/challenges/jumping-on-the-clouds

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
  public static void main(String[] args) {

    Scanner in = new Scanner(System.in);
    int cloudsLength = in.nextInt();
    int minDistance = 0;
    boolean skipped = false;

    for(int cloudIndex = 0; cloudIndex < cloudsLength; cloudIndex++){
      int cloud = in.nextInt();
      if (cloud == 0 && !skipped) {
        skipped = true;
        continue;
      } else {
        minDistance++;
        skipped = false;
      }
    }

    System.out.println(minDistance);
  }
}
