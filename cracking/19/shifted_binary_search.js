var array = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

function shiftedBinarySearch(value, array, leftIndex, rightIndex) {
  if (leftIndex == undefined) {
    leftIndex = 0;
    rightIndex = array.length / 2;
  }
  if (leftIndex == rightIndex) {
    return leftIndex;
  }
  var left = array[leftIndex];
  var right = array[rightIndex];

  if (left < value) {
    if (left < right) {
      var pivotIndex = (rightIndex - leftIndex) / 2;
      var pivot = array[pivotIndex];

      if (value < pivot) {
        shiftedBinarySearch(value, array, leftIndex, pivotIndex);
      } else {
        shiftedBinarySearch(value, array, pivotIndex, rightIndex);
      }
    }
  } else {
  }
}

var array2 = [1, 3, 4, 5, 7, 10, 14, 15, 16, 19, 20, 25];

function binarySearch(value, array, leftIndex, rightIndex) {
  if (leftIndex == undefined) {
    leftIndex = 0;
    rightIndex = array.length - 1;
  }

  if (leftIndex == rightIndex) {
    if (array[leftIndex] == value) {
      return leftIndex;
    } else {
      return false;
    }
  }

  var left = array[leftIndex];
  var right = array[rightIndex];

  var pivotIndex = Math.floor((leftIndex + rightIndex) / 2);
  var pivot = array[pivotIndex];

  if (left < value) {
    // Normal.
    if (left < pivot) {
      if (value < pivot) {
        return binarySearch(value, array, leftIndex, pivotIndex);
      } else if (value == pivot) {
        return pivotIndex;
      } else if (pivot < value) {
        return binarySearch(value, array, pivotIndex + 1, rightIndex);
      }

    // Value is
    } else {
      return binarySearch(value, array, leftIndex, pivotIndex);
    }
  } else {
    if (value < pivot) {
      return binarySearch(value, array, leftIndex, pivotIndex);
    } else if (value == pivot) {
      return pivotIndex;
    } else if (pivot < value) {
      return binarySearch(value, array, pivotIndex + 1, rightIndex);
    }
  }
}

console.log(binarySearch(25, array));
