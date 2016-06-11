// http://eloquentjavascript.net/04_data.html

var arrayToList = function(array) {

  // Base case.
  if (array.length == 0) {
    return null;
  }

  // Trasversal.
  var _value = array[0];
  array.shift();

  return {
    value: _value,
    rest: arrayToList(array)
  }
}

console.log(arrayToList([10, 20]));
