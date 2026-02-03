// Data Types:
// => Primptive
// There are Seven Primptive Data Types
// 1. => Number (Decimal and non-decimal)
let x = 45;
let y = 78.8;
console.log(x, y);
console.log(typeof x, typeof y);
// 2. => String (Characters)
let firstName = "Imran";
let lastName = "Khan";
console.log(firstName, lastName);
console.log(typeof firstName, typeof lastName);

// 3. => Boolean (true and false)
let a = 33;
let b = 78;
let c = a > b;
console.log(c);
console.log(typeof c);

// 4. => Undefined (value is not defined or empty Value)
let num1;
console.log(num1);
console.log(typeof num1);

// 5. => Null (Empty Value)

// 6. => Symbols (Specific Equation, Unique type of Data)

// 7. => BigInt (Huge Data or large Data)
// let num2 = 123445667----------N;

// => Non-Primptive:
// => Arrays
// => Objects

// Type Conversion
let num2 = Number("45");
console.log(num2);
console.log(typeof num2);
// let age = Number(prompt("Enter Your Age:"));
// console.log(age);
// console.log(typeof age);

// Let, const and var
// 1. let:
// 1. => You cannot Redeclare a variable with let keyword.
// let age;
// 2. => You can Reassign a variable with let keyword.
num2 = 67;
console.log(num2);
// 3. => let is Block Scope

// 2. Const
// 1. => You cannot Redeclare a variable with const keyword
// const num2;
// 2. => You cannot Reassign a variable with const keyword.
const number = 89;
console.log(number);
// number = 90;
// console.log(number);
// 3. => Block Scop

// 3. var
// 1. => You can Redeclare a variable with var keyword.
var h = 33;
console.log(h);
var h = 67;
console.log(h);
// 2. => You can Reassign a variable with var keyword.
h = 99;
console.log(h);
// 3. => var Global Scope
