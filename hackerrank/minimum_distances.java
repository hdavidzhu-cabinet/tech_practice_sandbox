import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

  public static void main(String[] args) {

    // Bookmarks help us keep track of when we last saw a number.
    Map<Integer, Integer> bookmarks = new HashMap<Integer, Integer>();
    int minDistance = 1001; // Outside of our expected range.
    int minPair = 10001;

    Scanner in = new Scanner(System.in);
    int arrayLength = in.nextInt();

    for(int currentPosition = 0; currentPosition < arrayLength; currentPosition++){
      int currentNumber = in.nextInt();

      if (bookmarks.containsKey(currentNumber)) {
        int lastPosition = bookmarks.get(currentNumber);
        int currentDistance = currentPosition - lastPosition;
        if (currentDistance < minDistance) {
          minDistance = currentDistance;
          minPair = currentNumber;
        }
      } else {
        bookmarks.put(currentNumber, currentPosition);
      }
    }

    System.out.println(minDistance < 1001 ? minDistance : -1);
  }
}
