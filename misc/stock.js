function nextCriticalPoint(array, indexCurrent, isMin) {
  if (indexCurrent > array.length) {
    return array.length - 1;
  }

  var currentValue = array[indexCurrent];
  for (var i = indexCurrent; i < array.length; i++) {
    if (isMin) {
      if (array[i] > currentValue) {
        return i - 1;
      }
    } else {
      if (array[i] < currentValue) {
        return i - 1;
      }
    }
  }

  return array.length - 1;
}

function getProfit(array) {
  var profit = 0;
  var indexCurrent = 0;
  while (indexCurrent < array.length) {
    var indexMin = nextCriticalPoint(array, indexCurrent, true);
    var indexMax = nextCriticalPoint(array, indexMin + 1, false);
    indexCurrent = indexMax + 1;
    if (indexMax != indexMin) {
      console.log('Buy on day: ' + indexMin);
      console.log('Sell on day: ' + indexMax);
    }
    profit += array[indexMax] - array[indexMin];
  }
  // console.log(profit);
}

var array = [100, 180, 260, 310, 40, 535, 695];
getProfit(array);

// var array2 = [100, 80, 60, 40, 20];
// getProfit(array2);
//
// var array3 = [12, 100, 80, 60, 40, 100, 1000, 20, 40];
// getProfit(array3);
