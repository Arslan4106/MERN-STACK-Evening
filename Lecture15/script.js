// if else Statement
// if (condition) {
//   Statement;
// } else {
//   statement;
// }
// write a program to find the greater between two numbers
let a = 97;
let b = 88;
if (a > b) {
  console.log("a is greater than b:", a, "Vs", b);
} else {
  console.log("b is greater than a: ", a, "vs", b);
}
// write to check weather you are eligible for driving or not
let age = 20;
if (age >= 18) {
  console.log("You are eligible for Driving");
} else {
  console.log("You are not Eligible for Driving");
}
// Nested if Statement
// Write a program to find the greater number between three numbers using nested if Statement
let x = 120;
let y = 780;
let z = 99;
if (x > y) {
  if (x > z) {
    console.log("x is greater between three numbers:", x, "vs", y, "vs", z);
  } else {
    console.log("z is greater between three numbers:", x, "vs", y, "vs", z);
  }
} else {
  if (y > z) {
    console.log("Y is greater between three numbers:", x, "vs", y, "vs", z);
  } else {
    console.log("Z is greater between three Numbers:", x, "vs", y, "vs", z);
  }
}
// if else and else-if Statement
let marks = 49;
if (marks >= 90 && marks <= 100) {
  console.log("A+");
} else if (marks >= 80 && marks < 90) {
  console.log("A");
} else if (marks >= 70 && marks < 80) {
  console.log("B+");
} else if (marks >= 60 && marks < 70) {
  console.log("B");
} else if (marks >= 50 && marks < 60) {
  console.log("C");
} else {
  console.log("You are Fail");
}

// The Switch Statement
let day = 9;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Please Enter the Correct Number between 1 & 7");
}
// with if else statement
if (day == 1) {
  console.log("Monday");
} else if (day == 2) {
  console.log("Tuesday");
} else if (day == 3) {
  console.log("Wednesday");
} else if (day == 4) {
  console.log("Thursday");
} else if (day == 5) {
  console.log("Friday");
} else if (day == 6) {
  console.log("Saturday");
} else if (day == 7) {
  console.log("Sunday");
} else {
  console.log("Please Enter the Correct Number between 1 & 7");
}
