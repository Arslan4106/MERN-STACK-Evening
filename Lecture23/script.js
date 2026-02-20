// Functions Calling Other Function
function cutFruits(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, mangoes, dates) {
  let applePieces = cutFruits(apples);
  let mangoPieces = cutFruits(mangoes);
  let datePieces = cutFruits(dates);
  let juice = `Juice with ${applePieces} Pieces of Apples and ${mangoPieces} Pieces of Mangoes and ${datePieces} Pieces of Dates`;
  return juice;
}
console.log(fruitProcessor(4, 2, 6));
// Coding Challenge: 01
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
let markHeight = 1.88;
let johnHeight = 1.76;
let markMass = 95;
let johnMass = 85;
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);
console.log("Mark's BMI: ", markBMI);
console.log("John's BMI: ", johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
