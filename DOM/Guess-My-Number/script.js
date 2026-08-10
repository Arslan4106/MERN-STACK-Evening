// Guess My Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// document.querySelector(".secretNumber").textContent = secretNumber;
let score = 20;
document.querySelector(".guess").addEventListener("click", function () {
  // console.log("You have Clicked on Check Button");
  let guess = document.querySelector(".numbers").value;
  // console.log(guess);

  if (!guess) {
    if (score > 1) {
      score--; // score = score - 1;
      document.querySelector(".message").textContent = "No Number 😡";
      document.querySelector("body").style.backgroundColor = "darkred";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Have Lost the Game 😭";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Too High 📈";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Have Lost the Game 😭";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "darkred";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Too Low 📉";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Have Lost the Game 😭";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "darkred";
    }
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "👉 Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".secretNumber").textContent = secretNumber;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "rgb(44, 44, 44)";
});
// Type of SEO:
// White Hat SEO:
// Black Hat SEO
// Grey Hat SEO

// Categories of SEO:
// 1. On-Page SEO:
// => Keywords Research:
// keywords types on length base
// -> Longtail keywords
// -> Shortail keywords
// -> Medium tail keywords
// Keywords types on strategy base
// -> Primary keyword
// -> Secondary keyword
// keywords types on intent base
// -> informational keywords
// -> transactional keywords
// -> commercial keywords

// keyword Difficulty (KD): Competition, (0 - 100)
// Search Volume (SV):
// Filter:
// kd: 0 - 10
// sv: 500

// => Image Optimization
// => Image  Alt Text
// => Content Optiization
// => Internal Linking
// => External Linking or Outbound links
// => URL Optimization
// => Keywords placements
// => Indexing
// => Crawling
// => Meta Title
// => Meta Description

// Off-Page SEO
// Technical SEO
// Local SEO
// Voice SEO
