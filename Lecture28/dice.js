let diceEl = document.querySelector('.rollDice').textContent;
console.log(diceEl);

document.querySelector('.btn').addEventListener('click', function () {
  let diceRandom = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRandom);
  console.log('You have Clicked on Roll me Button');
  diceEl.src = `dice-${diceRandom}.png`; //dice-1.png, dice-2.png
  document.querySelector('.rollDice').textContent = diceEl;
});
