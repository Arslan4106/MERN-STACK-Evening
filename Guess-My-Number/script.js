// Guess My Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector(".secretNumber").textContent = secretNumber;
document.querySelector(".guess").addEventListener("click", function () {
  console.log("You have Clicked on Check Button");
});
