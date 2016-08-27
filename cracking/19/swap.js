function swap(a, b) {
  a = a - b;
  b = b + a;
  a = b - a;
  console.log('a: ' + a);
  console.log('b: ' + b);
}

swap(1, 10);
swap(3, 15);
