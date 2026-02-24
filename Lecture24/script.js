// DOM Manipulation
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// const secret =
document.querySelector(".secretNumber").textContent = secretNumber;
// console.log(secret);
// let checkbutton = document.querySelector(".check");
// console.log(checkbutton);
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  //   console.log("You have Clicked on Check Button");
  let guessNumber = document.querySelector(".guess").value;
  console.log(guessNumber);
  if (guessNumber == secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 👉";
    document.querySelector("body").style.backgroundColor = "green";
  }
  if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High 📈";
      score--;
      // console.log(score);
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Have Lost the Game 😭";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessNumber < secretNumber) {
    if (score >= 1) {
      document.querySelector(".message").textContent = "Too Low 📉";
      score--;
      // console.log(score);
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Have Lost the Game 😭";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
});
