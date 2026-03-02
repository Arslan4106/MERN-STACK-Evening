// DOM: Document Object Modal
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;
function loss() {
  document.querySelector(".message").textContent = "You Have Lost the Game 😭";
  document.querySelector("body").style.backgroundColor = "red";
  document.querySelector(".score").textContent = 0;
}
// document.querySelector(".secretNumber").textContent = randomNumber;
document.querySelector(".check").addEventListener("click", function () {
  let guessNumber = document.querySelector(".guess").value;
  console.log(guessNumber);
  //   let score = 20;
  if (!guessNumber) {
    document.querySelector(".message").textContent = "No Number 😡";
    document.querySelector("body").style.backgroundColor = "red";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guessNumber == randomNumber) {
    document.querySelector(".message").textContent = "Correct Number 👉";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".secretNumber").textContent = randomNumber;
  } else if (guessNumber > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      loss();
    }
  } else if (guessNumber < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      loss();
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "rgb(93, 93, 93)";
  document.querySelector(".score").textContent = score;
  //   document.querySelector(".highestScore").textContent = 0;
  document.querySelector(".secretNumber").textContent = "?";
  document.querySelector(".guess").value = "";
});
