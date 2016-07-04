// Rotate an image in place.
var image = [
	[1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
]

var dimensions = 3;

function rotateBy90(_image, dimensions) {
  var image = _image;
  // Start at the outside layer and work your way in.
  for (var i = 0; i < Math.floor(dimensions / 2.0); i++) {
    // Each layer is smaller than the last one.
    var width = dimensions - (2 * i);
    var widthIndex = width - 1;  
    for (var j = i; j < width - i - 1; j++) {
      var c0 = image[i][j];
      var c1 = image[j][widthIndex];
      var c2 = image[widthIndex][widthIndex - j];
      var c3 = image[widthIndex - j][i];
      image[j][widthIndex] = c0;
      image[widthIndex][widthIndex - j] = c1;
      image[widthIndex - j][i] = c2;
      image[i][j] = c3;  
    }
  }
  return image;  
}

console.log(image);
console.log(rotateBy90(image, dimensions));