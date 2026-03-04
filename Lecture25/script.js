let btnOpenModal = document.querySelectorAll(".btn");
console.log(btnOpenModal);
console.log(btnOpenModal.length);
let modal = document.querySelector(".modal");
console.log(modal);
let closeModal = document.querySelector(".closeModal");
console.log(closeModal);
let overlay = document.querySelector(".overlay");
for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener("click", function () {
    // console.log("You Have Clicked On the Button");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
closeModal.addEventListener("click", function () {
  // console.log("You Have Clicked On the Button");
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
