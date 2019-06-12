const instructorWithLongestName = function(instructors) {
  // Put your solution here
  var max = 0;
  for (var i = 1; i < instructors.length; ++i) {
    // if two instructors have same length of names
    // first one will be returned, since index number"max"
    // is not going to change if current length === max 
    if (instructors[i].name.length > instructors[max].name.length) {
      max = i;
    }
  }
  return instructors[max];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
