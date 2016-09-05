// Input:
var terrain = [
  [1, 1, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 0, 0],
  [0, 1, 1, 1]
];

var terrainSize = terrain.length;

function findSolution(terrain) {
  var isSuccessful = false;
  var isDone = false;
  var traversalStack = [];
  var solutionList = [];

  var startingPostion = [0, 0];
  traversalStack.push(startingPostion);
  while (traversalStack.length > 0) {
    position = traversalStack.pop();

    if (isMoveValid(position, terrain)) {
      solutionList.push(position);
      if (isSolution(position)) {
        console.log("Solution!");
        break;
      }
    }

    rightPos = [position[0] + 1, position[1]];
    downPos = [position[0], position[1] + 1];

    var currentLength = traversalStack.length;

    if (isMoveValid(downPos, terrain)) {
      traversalStack.push(downPos);
    }
    if (isMoveValid(rightPos, terrain)) {
      traversalStack.push(rightPos);
    }

    if (traversalStack.length == currentLength) {
      solutionList.pop();
    }

    console.log(solutionList);
  }
}

function isMoveValid(position, terrain) {
  if (position[0] >= terrain.length || position[1] >= terrain.length) {
    return false;
  }
  return !!terrain[position[1]][position[0]];
}

function isSolution(position) {
  // Check if at final location.
  return (position[0] == terrainSize - 1 && position[1] == terrainSize - 1);
}

findSolution(terrain);
