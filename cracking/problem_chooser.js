var prompt = require('prompt');

var page = Math.round((93 - 46) * Math.random()) + 46;
var section = Math.random();

console.log("Page: " + page);

prompt.get("total", function(err, result) {
  console.log("Number: " + Math.round(section * result.total));
});
