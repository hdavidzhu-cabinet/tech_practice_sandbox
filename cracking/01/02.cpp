#include <iostream>

using namespace std;

void reverse(char *str) {
  char * end = str;
  char tmp;
  if (str) {
    while (*end) {
      ++end;
    }
    --end;
    while (str < end) {
      tmp = *str;
      *str = *end;
      *end = tmp;
      str++;
      end--;
    }
  }
}

int main() {
  char hello[] = "Hello";
  reverse(hello);
  cout << hello;
  return 0;
}
