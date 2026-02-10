//  Functions in Js
// Built-in Function: console.log(), prompt()
// User Defined Function
function logger() {
  console.log("I am a MERN STACK Developer");
}
logger(); // calling the Function, or invoking the Function, returning the function
logger();
logger();
logger();
// write a program to find the average of three numbers using function
function average() {
  let num1 = 89;
  let num2 = 90;
  let num3 = 23;
  let sum = num1 + num2 + num3;
  let avg = sum / 3;
  let average = "The Average of Three Numbers is:" + avg;
  //   console.log("The Average of Three Numbers is: ", avg);
  return average;
  console.log("The Average of Three Numbers is: ", avg);
}
console.log(average());

// write to program to find the average marks for multiple students using function
function averagMarks(studentsName, phy, chem, mth, bio, com, eng, ps) {
  // Arguments
  let sum = phy + chem + mth + bio + com + eng + ps;
  let avg = sum / 7;
  console.log(studentsName, ":", avg);
}
averagMarks("Umar", 88, 76, 99, 45, 73, 72, 40); // Parameters
averagMarks("Jageer", 90, 66, 91, 45, 79, 65, 51);

function fruitProcessor(apples, bananas, mangoes) {
  console.log(
    "Juice with",
    apples,
    "apples,",
    bananas,
    "Bananas",
    "and",
    mangoes,
    "Mangoes",
  );
}
fruitProcessor(4, 6, 8);
