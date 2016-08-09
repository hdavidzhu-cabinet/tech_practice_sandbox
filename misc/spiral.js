var input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]
];

var RIGHT = 0;
var DOWN = 1;
var LEFT = 2;
var UP = 3;

function printInwardSpiral(matrix) {
  var matrixWidthMax = matrix[0].length - 1;
  var matrixLengthMax = matrix.length - 1;
  var direction = RIGHT;

  // Start i at -1 for an offset.
  // TODO: Figure out how to do this better.
  var i = -1;
  var j = 0;

  walls = [matrixWidthMax, matrixLengthMax, 0, 0];
  var turnCount = 0;
  while (turnCount < 4) {

    // Intend to turn.
    if (turnCount == 0) {
      turnCount = 1;
    }

    // If we are moving forward, ignore turning.
    if (direction == RIGHT && i < walls[RIGHT]) {
      i++;
      turnCount = 0;
    } else if (direction == DOWN && j < walls[DOWN]) {
      j++;
      turnCount = 0;
    } else if (direction == LEFT && i > walls[LEFT]) {
      i--;
      turnCount = 0;
    } else if (direction == UP && j > walls[UP]) {
      j--;
      turnCount = 0;
    }

    // If we want to turn, do so.
    if (turnCount > 0) {
      direction = turn(direction, walls);
      turnCount++;

    // Otherwise, let's log our solution.
    } else {
      console.log(matrix[j][i]);
    }
  }
}

// Provides a new direction.
// Every turn would reduce the wall size around us.
function turn(currentDirection, walls) {
  // Reduce our wall size.
  if (currentDirection == RIGHT || currentDirection == DOWN) {
    walls[currentDirection] = walls[currentDirection] - 1;
  } else {
    walls[currentDirection] = walls[currentDirection] + 1;
  }
  // Bump the direction to a new one.
  return (currentDirection + 1) % 4;
}

printInwardSpiral(input);
