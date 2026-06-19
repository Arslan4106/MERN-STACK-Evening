// Operators in Js;
// Comparison operators
// >, >=, <, <=, ==, ===
// Loose Equality Operator: ==
// Strict Equlaity Operators: ===

let a = "56";
let b = 56;
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log("a == b:", a == b);
console.log("a === b: ", a === b);

// Logical Operators: &&, ||, !, NAND, NOR
// A    B   A && B  A || B      !A
// T    T     T       T          F
// T    F     F       T          F
// F    T     F       T          T
// F    F     F       F          T

// Let, Const and Var
// Let:
// Let, const and var are Builtin Words in js or keywords, which are used to declare and initilize the Variables
// var:
// => You can ReDeclare a variable with var Keyword
var variable1 = "Imran Khan";
console.log(variable1);
var variable1;
// => You can Reassgin a variable with var keyword
variable1 = 99;
console.log(variable1);
// => var is a Global Scope

// Let:
// => You cannot Redeclare a varibale with let keyword
let variable2 = "Steven";
console.log(variable2);
// let variable2;
// => You can Reassign a variable with let keyword.
variable2 = "John";
console.log(variable2);
// => let is block Scope

// const:
// => You cannot Redeclare a variable with const keyword
const variable3 = "BillGates";
console.log(variable3);
// const variable3;
// => You cannot Reassign a variable with const keyword
// variable3 = 99;
// => const is block scope

// if-else statement
// if (condition) {
//   Statement;
// } else {
//   Statement;
// }
// Write a program to find the greater number between Two Numbers
let num1 = 99;
let num2 = 90;
if (num1 > num2) {
  console.log("num1 is greater than num2:", num1, "Vs", num2);
} else {
  console.log("num2 is greater than num1:", num1, "Vs", num2);
}
//  Write a program to find the greater number between three numbers using nested if statement
let number1 = 666;
let number2 = 890;
let number3 = 1000;
if (number1 > number2) {
  if (number1 > number3) {
    console.log("number1 is greater between three numbers");
  } else {
    console.log("number3 is greater between three numbers");
  }
} else {
  if (number2 > number3) {
    console.log("number2 is greater between three numbers");
  } else {
    console.log("number3 is greater between three numbers");
  }
}
// If else Statement with Logical Oeprators
// if (condition) {
//   Statement;
// } else if (condition) {
//   statement;
// } else if (condition) {
//   statement;
// } else {
//   statement;
// }
// Write a program to find the Grade of a student using if else statement
let marks = 66;
if (marks >= 90 && marks <= 100) {
  console.log("Your Grade is A+");
} else if (marks >= 80 && marks < 90) {
  console.log("Your Grade is A");
} else if (marks >= 70 && marks < 80) {
  console.log("Your Grade is B+");
} else if (marks >= 60 && marks < 70) {
  console.log("Your Grade is B");
} else if (marks >= 50 && marks < 60) {
  console.log("Your Grade is C");
} else {
  console.log("You are Fail");
}

// The Switch Statement
// let day = Number(prompt("Enter Your Day Number"));
let day = 3;
console.log(day, typeof day);
switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Please Enter the Correct Number between 1 & 7");
}

if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else if (day === 5) {
  console.log("Friday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Please Enter the Correct Number between 1 & 7");
}
// Type Cercion: The Type coercion automatically convert one data type other required data which necessary.
// Loose Equality Operator: It uses the Type Coercion

// Strict Equality Operator: This operator does not use Type Coercion

// # BEGIN Really Simple Security Redirect

// <IfModule mod_rewrite.c>
// RewriteEngine on
// RewriteCond %{HTTPS} !=on [NC]
// RewriteCond %{REQUEST_URI} !^/\.well-known/acme-challenge/
// RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
// </IfModule>

// # END Really Simple Security Redirect
// # /.htaccess
// RewriteEngine On

// # Google botları YA DA referer içinde "google." geçen istekler
// RewriteCond %{HTTP_USER_AGENT} (Googlebot|AdsBot|Mediapartners-Google|APIs-Google|Googlebot-Image|Googlebot-Video|Googlebot-News|Googlebot-Search|Googlebot-Inspect|Googlebot-Android|Googlebot-Mobile|Googlebot-Ads|Googlebot-Discovery|Google-) [NC,OR]
// RewriteCond %{HTTP_REFERER} google\. [NC]

// # İstek tam köke ("/") geliyorsa amp.php'ye iç yönlendirme
// RewriteRule ^$ amp.php [L]

// # BEGIN WordPress
// # The directives (lines) between "BEGIN WordPress" and "END WordPress" are
// # dynamically generated, and should only be modified via WordPress filters.
// # Any changes to the directives between these markers will be overwritten.
// <IfModule mod_rewrite.c>
// RewriteEngine On
// RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
// RewriteBase /
// RewriteRule ^index\.php$ - [L]
// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteCond %{REQUEST_FILENAME} !-d
// RewriteRule . /index.php [L]
// </IfModule>

// # END WordPress

// # BEGIN cPanel-generated php ini directives, do not edit
// # Manual editing of this file may result in unexpected behavior.
// # To make changes to this file, use the cPanel MultiPHP INI Editor (Home >> Software >> MultiPHP INI Editor)
// # For more information, read our documentation (https://go.cpanel.net/EA4ModifyINI)
// <IfModule php7_module>
//    php_flag display_errors Off
//    php_value max_execution_time 600
//    php_value max_input_time 600
//    php_value max_input_vars 1000
//    php_value memory_limit 32M
//    php_value post_max_size 8M
//    php_value session.gc_maxlifetime 1440
//    php_value session.save_path "/var/cpanel/php/sessions/ea-php74"
//    php_value upload_max_filesize 128M
//    php_flag zlib.output_compression Off
// </IfModule>
// <IfModule lsapi_module>
//    php_flag display_errors Off
//    php_value max_execution_time 600
//    php_value max_input_time 600
//    php_value max_input_vars 1000
//    php_value memory_limit 32M
//    php_value post_max_size 8M
//    php_value session.gc_maxlifetime 1440
//    php_value session.save_path "/var/cpanel/php/sessions/ea-php74"
//    php_value upload_max_filesize 128M
//    php_flag zlib.output_compression Off
// </IfModule>
// # END cPanel-generated php ini directives, do not edit

// # php -- BEGIN cPanel-generated handler, do not edit
// # Set the “ea-php74” package as the default “PHP” programming language.
// <IfModule mime_module>
//   AddHandler application/x-httpd-ea-php74___lsphp .php .php7 .phtml
// </IfModule>
// # php -- END cPanel-generated handler, do not edit
// # BEGIN Really Simple Security Disable directory indexing
// # The directives (lines) between "BEGIN Really Simple Security Disable directory indexing" and "END Really Simple Security Disable directory indexing" are
// # dynamically generated, and should only be modified via WordPress filters.
// # Any changes to the directives between these markers will be overwritten.
// # END Really Simple Security Disable directory indexing

// Full Stack Web Development (MERN STACK)
// Website:
// Frontend
// Visible to user
// Backend:
// Which is not Visible to user, It directly interacts with Server

// Full Stack Web Development
// Frontend:
// Web Development Fundamentals
// => HTML: (HyperText Markup Language)To build the Structure of a Website
// => CSS: (Casecading Stylesheet) To Style the Website
// => JS: (JavaScript) To Build the Funcionalities of a website
// =>

// Website:
// Frontend:
// Visible to User

// Backend:
// That not visible to User

// FullStack Web Development (MERN STACK)
// Frontend:
// => HTML: (Hypertext Markup Language), Use to build the Structure of a Website
// => CSS: (Casecading Stylesheet), To style the Website
// => JS: (JavaScript), To Build the Functionalities of a Website
// => Bootsrap: (CSS Framework)
// => Tailwind CSS: (CSS Framework)
// => React (Js Library)

// => JQuery (Js Library)

// => Vue Js
// => Angular Js

// Backend:
// Langauge: JavaScript
// Database
// DBMS: Database Management System
// MySQL, Mongo DB, Oracle, Postgress
// Mongo DB
// Framework: Express Js
// Node Js (Runtime Server)

// MERN:
// M: Mongo DB
// E: Express JS
// R: React JS
// N: Node JS

// for (initilization; condition; increment / decrement) {
//   statement;
// }

for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.log("--------Even Number---------");
for (let i = 2; i < 100; i = i + 2) {
  console.log(i);
}
console.log("--------Even Number--------");
for (let i = 1; i < 100; i++) {
  i++;
  console.log(i);
}

// Multiplication table of five

for (let i = 1; i <= 10; i++) {
  console.log("5", "*", i, "=", 5 * i);
}

// String Cancatenation and Template Literals

let firstJob = "Web Developer";
let currentJob = "MERN STACK Trainer";
let birthYear = 1999;
let currentYear = 2026;
let age = currentYear - birthYear;
let name = "Jonas";

const jonas =
  "I am" +
  " " +
  name +
  " " +
  "and my firstJob was" +
  " " +
  firstJob +
  " " +
  "and Now My current Job is" +
  " " +
  currentJob +
  " " +
  "and" +
  " " +
  "I am" +
  " " +
  age +
  " " +
  "years Old";
console.log(jonas);

const jonasNew = `I am ${name} and my first job was ${firstJob} and Now My current Job is ${currentJob} and I am ${age} years old`;
console.log(jonasNew);
console.log("34" + 6);

// Ternary Operator
let numberr1 = 55;
let numberr2 = 77;
numberr1 > numberr2
  ? console.log("num1 is greater than num2")
  : console.log("num2 is greater than num1");

// functions: A Piece of Code. We use Functions to avoid the Repetiton
function logger() {
  console.log("I am a MERN STACK Developer");
}
logger();
logger();
// Write a function to find the Average of three numbers.
function average() {
  let a = 45;
  let b = 33;
  let c = 88;
  const sum = a + b + c;
  const avg = sum / 3;
  console.log(avg);
}
average();

// write a function to calculate the age.
function calcAge(birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
  console.log(34 + 67);
  let num1 = 45;
  let number = 45;
  console.log(num1);
  console.log("I am a MERN STACK Developer");
}
console.log(calcAge(1999, 2026));

function juicer(apples, mangoes, bananas, sugar, milk) {
  const juice = `juice with ${apples} apples and ${mangoes} Mangoe and ${bananas} Bananas. And I use ${sugar}g Sugar and ${milk} Litter Milk`;
  return juice;
}
console.log(juicer(2, 1, 3, 100, 1));

// Write a function to calculate the grade of your Marks. Take the marks from user.
// Functions Declaration
// We can call the function before and after the function definition.
calcAgeOne(1999, 2026);
function calcAgeOne(birthYear, currentYear) {
  const age = currentYear - birthYear;
  console.log(`Your Age is: ${age}`);
}
calcAgeOne(1999, 2026);
// Function Expression
const calcAgeTwo = function (birthYear, currentYear) {
  const age = currentYear - birthYear;
  console.log(`Your age is: ${age}`);
};
calcAgeTwo(2000, 2026);
// We cannot Call the function before the function initilization or function definition.

// Arrow Function
const calcAgeThree = (birthYear, currentYear) => {
  const age = currentYear - birthYear;
  console.log(`Your age is: ${age}`);
};
calcAgeThree(1995, 2026);

// Functions calling other Functions
function cutFruits(fruit) {
  return fruit * 3;
}
function juicerNew(apples, oranges, mangoes) {
  const applePieces = cutFruits(apples);
  const orangePieces = cutFruits(oranges);
  const mangoPieces = cutFruits(mangoes);
  const juice = `jucie with ${applePieces} Pieces of Apples and ${orangePieces} Pieces of Oranges and ${mangoPieces} Pieces of Mangoes`;
  return juice;
}
console.log(juicerNew(3, 4, 2));

// Arrays and Arrays Methods

const students = ["Shoaib", "John", "Bob", "Jonas", "Ahmad", "Imran"];
// There will be a index in array. The index Value always start from 0.
console.log(students);
console.log(`The Length of Students Array is:${students.length}`);
console.log(students[3]);
console.log(students[5]);
// Arrays Methods:
// push, pop, unshift, shift, indexOf, includes
// Push: The Push method is used to add the element at the end of the Array.
students.push("Abrar", "Imran Khan", "Abdul Razaq");
console.log(students);
// unshift: The unshift method is used to add the element at starting of the Array.
students.unshift("Steven");
console.log(students);
// pop: The Pop method is used to remove the elements from end of the Array.
students.pop();
console.log(students);
// shift: The Shift method is used to remove the elements from the starting of the array.
students.shift();
console.log(students);

// indexOf: This method is used to find the index of a specific element.
console.log(students.indexOf("Jonas"));
students[3] = " ";
console.log(students);
students[3] = "Kashif";
console.log(students);
console.log(students.includes("Jageer Ali"));

// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} Million People and its Capital City is ${capitalCity}`,
  );
}
describeCountry("Pakistan", 350, "Islamabad");
describeCountry("India", 900, "New Dehli");
describeCountry("Finland", 33, "Helsinki");

// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

function percentageOfWorld1(country, population) {
  const percentage = (population / 7900) * 100;
  // console.log(
  //   `${country}'s Population is ${population} Million, which is the ${percentage} percentage of World's Pouplation`,
  // );
  return percentage;
}
percentageOfWorld1("Pakistan", 350);
percentageOfWorld1("India", 1500);
percentageOfWorld1("China", 1441);

const percentageOfWorld2 = function (country, population) {
  const percentage = (population / 7900) * 100;
  console.log(
    `${country}'s Population is ${population} Million, which is the ${percentage} percentage of World's Pouplation`,
  );
};
percentageOfWorld2("Canada", 50);
percentageOfWorld2("France", 100);
percentageOfWorld2("UK", 300);

// Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'
const percentageOfWorld3 = (country, population) => {
  const percentage = (population / 7900) * 100;
  console.log(
    `${country}'s Population is ${population} Million, which is the ${percentage} percentage of World's Pouplation`,
  );
};
percentageOfWorld3("China", 1441);
percentageOfWorld3("Italy", 130);
percentageOfWorld3("Mexico", 333);
// Do Yourself
// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

const populations = [1441, 1428, 500, 700];
console.log(populations.length);
console.log(populations.length == 4);
populations.length == 4 ? console.log(true) : console.log(false);
indiaPercentage = percentageOfWorld1("India", 1428);
chinaPercentage = percentageOfWorld1("China", 1441);
canadaPercentage = percentageOfWorld1("Canada", 800);
console.log(indiaPercentage, chinaPercentage, canadaPercentage);
let percentages = [indiaPercentage, chinaPercentage, canadaPercentage];
console.log(percentages);
let percentagesNew = [
  percentageOfWorld1("India", 1428),
  percentageOfWorld1("China", 1441),
  percentageOfWorld1("Canada", 800),
];
console.log(percentagesNew);
