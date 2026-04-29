"use strict";
const firstName = "Steven";
function calcAge(birthYear) {
  const age = 2026 - birthYear;
  console.log(firstName);
  function printAge() {
    const firstName = "Imran";
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    // console.log(str);
    if (birthYear >= 1997 && birthYear <= 2007) {
      var myNewStr = "Jonas";
      let firstName = "Bob";
      const str = `${firstName}, You are Genz, Your age is ${age}, born in ${birthYear}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      console.log(add(5, 5));
    }
    console.log(add(5, 5));
    // console.log(str);
    console.log(myNewStr);
  }
  //   console.log(add(5, 5));
  printAge();
  return age;
}
console.log(calcAge(1999));
// printAge();
