const sumLargestNumbers = function(data) {
  var largest;
  var larger;
  if (data[0] >= data[1]) {
    largest = data[0];
    larger = data[1];
  } else {
    largest = data[1];
    larger = data[0];
  }

  for (var i = 2; i < data.length; ++i) {
    if (data[i] > larger) {
      larger = data[i];
      if(data[i] > largest) {
        larger = largest;
        largest = data[i];
      }
    }
  }
  return largest + larger;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
