// Storing all the elements into variables
// let player0El = document.querySelector(".player--0");
// let player1El = document.querySelector(".player--1");
const scoreEl0 = document.getElementById("score--0");
console.log(scoreEl0);
const scoreEl1 = document.getElementById("score--1");
console.log(scoreEl1);
const currentEl0 = document.getElementById("current--0");
console.log(currentEl0);
const currentEl1 = document.getElementById("current--1");
console.log(currentEl1);
const diceEl = document.querySelector(".dice");
console.log(diceEl);
const btnNew = document.querySelector(".start-Game");
console.log(btnNew);
const btnRoll = document.querySelector(".rolldice");
console.log(btnRoll);
const btnHold = document.querySelector(".hold");
console.log(btnHold);
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
// const scores = [0, 0];
let currentScore = 0;
// let activePlayer = 0;
let activePlayer = 0;
const scores = [0, 0];

btnRoll.addEventListener("click", function () {
  // 1. Generating a Random number b/w 1 & 6
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display the Dice Roll
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //dice-5.png;
  if (dice !== 1) {
    currentScore = currentScore + dice;
    // document.getElementById(`current--${activePlayer}`).textContent =
    //   currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // currentEl0.textContent = currentScore;
  } else {
    // Player Switch
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // player0El.classList.toggle("player--active");
    // player1El.classList.toggle("player--active");
  }
});
