// Type Conversion
let x = Number("56");
console.log(x, typeof x);
// Type Coercion
// Javascript automatically converts one data to another datatype.
console.log(44 + "6");
console.log(44 + 6);
console.log(44 - "4");
console.log(44 * "2");
console.log(44 / "2");
// Loose Equality Operator: ==
// Loose Eauality Operator uses Type Coercion
// Strict Equality Operator: ===
// Strict Equality Operator does not use Type Coercion.
// let day = prompt("Enter Day Number");
let day = 4;
console.log(day, typeof day);
if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else if (day === 5) {
  // '5' == 5
  console.log("Friday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Please Enter the Correct Number between 1 & 7");
}

// Template Literal and String Concatenation
let firstName = "Jonas";
let lastName = "Bob";
let job = "Web Developer";
let age = 26;
let language = "English";
let country = "USA";
const jonas =
  "Hello! I am" +
  " " +
  firstName +
  " " +
  lastName +
  " " +
  "and I am a" +
  " " +
  age +
  " " +
  "Years old" +
  " " +
  job +
  " " +
  ". And I speak" +
  " " +
  language +
  " " +
  "and I live in" +
  " " +
  country;
console.log(jonas);

let jonasNew = `Hello! I am ${firstName} ${lastName} and I am ${age} years old ${job} and I speak ${language} and I live in ${country}`;
console.log(jonasNew);

// Truthy Values and Falsy Values
// Falsy Values: 0, null, undefined, NaN, false, "",
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(10));
