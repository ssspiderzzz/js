const numberOfVowels = function(data) {
  // Put your solution here
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      ++total;
    }
  }
  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
