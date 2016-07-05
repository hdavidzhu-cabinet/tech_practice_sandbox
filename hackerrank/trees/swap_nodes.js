// https://www.hackerrank.com/challenges/swap-nodes-algo

function Node(data, depth) {
	if (data == -1) return;
	this.data = data;
  this.depth = depth;
	this.left = null;
	this.right = null;
}

var rootNode = new Node(1, 1);
var nodeQueue = [rootNode];

function processData(input) {
  // Collect data.
  var inputArray = input.split('\n');
  var nodeCount = parseInt(inputArray[0]);
  var swapTimes = parseInt(inputArray[nodeCount + 1]);

  // Generate tree.
  for (var i = 1; i <= nodeCount; i++) {
    var node = nodeQueue.shift();
    var children = inputArray[i].split(' ');
    addNode(children[0], node, true);
    addNode(children[1], node, false);
  }

  // Swap lines of the correct multiple.
  for (var j = 1; j <= swapTimes; j++) {
    swapLevel = parseInt(inputArray[nodeCount + 1 + j]);
    swapAtLevel(swapLevel);
    printInOrder(rootNode);
    process.stdout.write('\n'); // Line break at the end.
  }
}

function addNode(value, parent, isForLeft) {
  if (value == -1) return;
  var node = new Node(value, parent.depth + 1);
  nodeQueue.push(node);
  isForLeft ? parent.left = node : parent.right = node;
}

function swapAtLevel(level) {
  var swapQueue = [rootNode];
  var current = null;
  while (swapQueue.length > 0) {
    current = swapQueue.shift();
    if (!current) continue;
    if (current.depth % level == 0) {
      var tmp = current.left;
      current.left = current.right;
      current.right = tmp;
    }
    swapQueue.push(current.left);
    swapQueue.push(current.right);
  }
}

function printInOrder(root) {
  if (!root) return;
  printInOrder(root.left);
  process.stdout.write(root.data + " ");
  printInOrder(root.right);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
