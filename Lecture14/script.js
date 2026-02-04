// Operators in Js

// 1. Artihmetic Operators: (+, -, *, /, ++, --, %)
let x = 5;
let y = 8;

console.log("x + y = ", x + y);
console.log("x - y = ", x - y);
console.log("x * y = ", x * y);
console.log("x / y = ", x / y);
console.log("y % x = ", y % x);
x++; // x = x + 1;
console.log(x);
y--; // y = y - 1;
console.log(y);

// 2. Assignment Operators (=, +=, -=, *=, /=)
let a = 40;
a += 5; // a = a + 5;
console.log(a);
a -= 10; // a = a - 10;
console.log(a);
a *= 2; // a = a * 2;
console.log(a);
a /= 5; // a = a / 5;
console.log(a);

// 3. Comparison Operators: (==, ===, <, <=, >, >=)
let d = 67;
let e = 67;
console.log(e == d); // Loose Equality Operator
console.log(d === e); // Strict Equality Oeprator
console.log(d < e);
console.log(d <= e);
console.log(d > e);
console.log(d >= e);
// 4. Logical Operators: (&&, !, ||, NAND, NOR)
