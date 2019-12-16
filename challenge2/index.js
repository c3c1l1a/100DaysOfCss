let modal = document.querySelector(".modal");
let dismissModalBtn = document.querySelector(".dismiss-modal-btn");

dismissModalBtn.addEventListener("click", function() {
  modal.classList.toggle("popOut");
  modal.classList.toggle("hide");
});
