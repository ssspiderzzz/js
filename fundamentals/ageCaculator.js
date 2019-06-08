var ageCalculator = function (name, yearOfBirth, currentYear) {
  var line = "";
  age = currentYear - yearOfBirth;
  line = name + " is " + age + " years old.";
  return line;
}



console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));