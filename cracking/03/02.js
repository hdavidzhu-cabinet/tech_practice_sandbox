// How would you design a stack which, in addition to push and pop, also has a
// function min which returns the minimum element? Push, pop and min should all
// operate in O(1) time.

class Stack {

  constructor() {
    this.stackArray = [];
  }

  push(inputValue) {
    var minValue = this.stackArray.pop();
    if (inputValue < minValue || minValue == undefined) {
      minValue = inputValue;
    }
    this.stackArray.push(inputValue);
    this.stackArray.push(minValue);
  }

  pop() {
    var minValue = this.stackArray.pop();
    var answer = this.stackArray.pop();
    this.stackArray.push(minValue);
    return answer;
  }

  min() {
    return this.stackArray.slice(-1)[0];
  }
}

var stack = new Stack();
stack.push(5);
stack.push(7);
stack.push(3);

for (var i = 0; i < 3; i++) {
  console.log("Min value is: " + stack.min());
  console.log("Top of stack is: " + stack.pop());
}
