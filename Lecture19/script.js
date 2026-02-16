// Ternary Operator
let a = 9;
let b = 6;
a > b ? console.log("a is greater than b") : console.log("b is greater than a");
// Loops in Js
// For Loop
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
for (let i = 2; i <= 100; i++) {
  i = i + 1;
  console.log(i);
}
for (let i = 1; i <= 100; i = i + 2) {
  console.log(i);
}
for (let i = 100; i >= 1; i--) {
  console.log(i);
}
// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
let country = "Pakistan";
let population = 130;
if (population > 33) {
  console.log(`${country}'s Population is above the Average`);
} else {
  let populationNew = 33 - population;
  console.log(
    `${country}'s Population is ${populationNew} Million below the Average`,
  );
}
