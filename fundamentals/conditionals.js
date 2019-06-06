//part1
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//part2
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//part3
const temp = 50;

if (temp < -40 || temp >40) {
  console.log("Maybe going outside isn't such a great idea…")
}

//part4
const rain = false

if (!rain) {
  console.log("Leave your umbrella at home!");
}