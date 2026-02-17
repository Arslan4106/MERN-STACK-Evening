// Function Declaration
console.log("Function Declaration");
console.log(calcAge(2026, 1999));
function calcAge(currentYear, birthYear) {
  let age = currentYear - birthYear;
  console.log(age);
  return age;
}

//  Function Expression
console.log("Function Expression");

const calcAgeNew = function (currentYear, birthYear) {
  let age = currentYear - birthYear;
  console.log(age);
  return age;
  //   let agee = 23;
};
console.log(calcAgeNew(2026, 1998));

// Arrow Function
console.log("Arrow Functions");
const calcAgeArrow = (birthYear, currentYear) => {
  let age = currentYear - birthYear;
  console.log(age);

  return age;
};
console.log(calcAgeArrow(2000, 2026));

// Arrays and Arrays Methods
const students = ["Umar", "Jageer", 45 - 30, "Asad", "Ehatesham", 23];
//  Array Name: Students
// Lenght: 6
// index: 0, 1, 2
