// NOTE: Incomplete. Not sure how to solve recursively with multiple eggs.
// Reference http://datagenetics.com/blog/july22012/index.html for more info.

function createBuildingWithBreakpointAt(height) {
  var bottom = Array(height).fill(false);
  var top = Array(100 - height).fill(true);
  return bottom.concat(top);
}

var building = createBuildingWithBreakpointAt(99);

// Naively check every other floor.
function checkStatically(buildingSection, _stepSize) {

  var stepSize = _stepSize;
  var lastIndex = 0;
  var counter = 0;

  // Find when the first egg breaks.
  for (var floorIndex = stepSize - 1; floorIndex < buildingSection.length; floorIndex += stepSize) {
    counter++;
    if (buildingSection[floorIndex]) break;
    lastIndex = floorIndex;
  }

  for (var secondEggIndex = lastIndex + 1; secondEggIndex < floorIndex; secondEggIndex++) {
    counter++;
    if (buildingSection[secondEggIndex]) break;
  }

  console.log("floorIndex: " + (buildingSection[secondEggIndex] ? secondEggIndex : floorIndex));
  return counter;
}

function checkDynamically(buildingSection, _stepSize) {

  var stepSize = _stepSize;
  var floorIndex = stepSize - 1;
  var lastIndex = 0;
  var counter = 0;

  // Find when the first egg breaks.
  console.log(floorIndex);
  console.log(buildingSection[floorIndex]);
  while (floorIndex < buildingSection.length) {
    counter++;
    if (buildingSection[floorIndex]) break;
    lastIndex = floorIndex; // Otherwise, let's save the current position.
    if (stepSize > 1) stepSize--; // Decrement the step count. 
    floorIndex += stepSize; // Bump the floor index.
  }

  // Find when the second egg breaks.
  for (var secondEggIndex = lastIndex + 1; secondEggIndex < floorIndex; secondEggIndex++) {
    counter++;
    if (buildingSection[secondEggIndex]) break;
  }
  console.log(lastIndex);
  console.log(secondEggIndex);
  console.log("floorIndex: " + (buildingSection[secondEggIndex] ? secondEggIndex : floorIndex));
  return counter; 
}

// console.log(checkStatically(building, 10));
console.log(checkDynamically(building, 19));

// var pastCount = building.length;
// var minCount = checkStatically(building, 10);
// while (minCount < pastCount) {
//   console.log(minCount);
//   pastCount = minCount;
//   minCount = checkDynamically(building, pastCount); 
// }
// console.log("MinCount: " + pastCount);
