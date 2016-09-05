// Input:
var terrain = [
  [1, 1, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 0, 0],
  [0, 1, 1, 1]
];

// @return [Path] if the path is a solution.
function findSolution(path) {
  var currentPos = path.slice(-1).pop();

  if (currentPos[0] == terrain.length - 1 && currentPos[1] == terrain.length - 1) {
    if (terrain[currentPos[1]][currentPos[0]] == 1) {
      return path;
    } else {
      return;
    }
  }

  var rightChild = getRight(currentPos);
  var downChild = getDown(currentPos);

  if (rightChild && downChild) {
    var clonedPath = path.slice(0);
    path.push(rightChild)
    var finalPath = findSolution(path);
    if (!finalPath) {
      clonedPath.push(downChild)
      finalPath = findSolution(clonedPath);
    }
    return finalPath;
  } else if (rightChild) {
    path.push(rightChild)
    return findSolution(path);
  } else if (downChild) {
    path.push(downChild)
    return findSolution(path);
  }
}

function getRight(currentPos) {
  var newPos = [currentPos[0] + 1, currentPos[1]];
  try {
    if (terrain[newPos[1]][newPos[0]] == 1) {
      return newPos;
    } else {
      return;
    }
  } catch(e) {
    return;
  }
}

function getDown(currentPos) {
  var newPos = [currentPos[0], currentPos[1] + 1];
  try {
    if (terrain[newPos[1]][newPos[0]] == 1) {
      return newPos;
    } else {
      return;
    }
  } catch(e) {
    return;
  }
}

function generateResult() {
  var solutionPath = findSolution([[0, 0]]);
  var grid = createEmptyGrid(terrain.length);
  for (var i = 0; i < solutionPath.length; i++) {
    var solutionStep = solutionPath[i];
    grid[solutionStep[1]][solutionStep[0]] = 1;
  }
  return grid;
}

function createEmptyGrid(size) {
  var grid = new Array(size).fill(0);
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(size).fill(0);
  }
  return grid;
}

console.log(generateResult());
