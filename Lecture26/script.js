let dolphinScoreSum = 97 + 112 + 101;
let dolphinAvg = dolphinScoreSum / 3;
console.log("Dolphin Average:", dolphinAvg);
let koalasScoreSum = 109 + 95 + 106;
let koalasAvg = koalasScoreSum / 3;
console.log("Koalas Average: ", koalasAvg);
if (dolphinAvg > koalasAvg && dolphinAvg >= 100) {
  console.log("Dolphin Win the Trophy");
} else if (koalasAvg > dolphinAvg && koalasAvg >= 100) {
  console.log("Koalas win the Trophy");
} else if (dolphinAvg == koalasAvg && dolphinAvg >= 100 && koalasAvg >= 100) {
  console.log("The Match is Draw");
} else {
  console.log("No Team will Win");
}

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430

let bill = 430;
let tip = bill > 50 && bill < 300 ? (15 / 100) * bill : (20 / 100) * bill;
console.log(tip);
console.log(
  `The Bill was ${bill} and the Tip was ${tip} and the Total bill was ${bill + tip}`,
);
