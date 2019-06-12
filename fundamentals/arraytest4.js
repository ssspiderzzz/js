var range = function (start, end, step) {
  var array = [];
  if (start < end && step > 0) {
    for (var element = start; element <= end; element += step){
      array.push(element);
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));