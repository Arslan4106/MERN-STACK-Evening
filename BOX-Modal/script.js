let modal = document.querySelector(".modal");
console.log(modal);
let closeModal = document.querySelector(".closeModal");
console.log(closeModal);
let overlay = document.querySelector(".overlay");
let btns = document.querySelectorAll(".btn");
console.log(btns);
console.log(btns.length);
console.log(btns[0]);
console.log(btns[1]);
console.log(btns[2]);
console.log("---------For Loop-----------");
for (let i = 0; i < btns.length; i++) {
  console.log(btns[i].textContent);
  btns[i].addEventListener("click", function () {
    console.log("You have CLicked on the Button");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (!modal.classList.contains("hidden")) {
    if (e.key == "Escape") {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
});

// Digital Marketing:
// Search Engine Optimization (SEO)

// SEM: Search Engine Marketing
// SMM: Social Media Marketing
// SMO: Social Media Optimization

// Primary keyword
// => URL
// => First Heading (h1)
// => First Sentence
// => Sub Heading
// => Image Alt Text
// => Meta Title
// => Meta Description
// => Keyword Density: 2% to 3%
// => Keywords Density = (no of primary keywords / Total no of words) * 100
// e.g
// => Total words: 1000
// => P.K = Interior Design
// => no of P.K = 50
// K.D = (No of P.K / Total No of Words) * 100
// K.D = (50 / 1000) * 100

// Secondary Keyword
