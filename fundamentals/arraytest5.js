
var lastIndexOf = function(array, num) {
  var temp = "";
  for (var x = 0; x < array.length; ++x) {
    
    if (array[x] === num) {
      temp = x;
    }
  }
  if (temp === "") {
    temp = -1;
  }

  return temp;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);