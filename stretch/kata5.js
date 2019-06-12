const urlEncode = function(text) {
  // Put strings into array
  var output = [];
  var outputInString = "";
  for (var i = 0; i < text.length; ++i){
    output.push(text[i]);
  }
  // kill the spaces at front and end
  while (output[0] === " ") {
    output.shift();
  }
  var max = output.length - 1;
  while (output[max] === " ") {
    output.pop();
    --max
  }
  // real codes start here
  for (var i = 0; i < output.length; ++i){
    if (output[i] === " ") {
      output[i] = "%20";
    }
    outputInString += output[i];
  }
  return outputInString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode("     blue is greener than purple for sure       "));