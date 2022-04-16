"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// Open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// Close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

// Close with ESC key
document.addEventListener("keydown", function (event) {
  // console.log(event.key); // Prints the key pressed
  // Non optimized code v
  //   if (event.key === "Escape") {
  //     if (!modal.classList.contains("hidden")) {
  //       closeModal();
  //       console.log("ESC key pressed");
  //     }
  //   }

  // Optimized code
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    console.log("ESC key pressed");
  }
});
