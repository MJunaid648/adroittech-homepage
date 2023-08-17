// Cookie pop-up
const popup = document.querySelector(".cookie-popup");
const closeBtns = document.querySelectorAll(".close-btn");

function closePopup() {
  popup.classList.remove("open");
  popup.classList.add("close");
  setTimeout(() => (popup.style.display = "none"), 1400);
}
closeBtns.forEach((btn) => {
  btn.addEventListener("click", closePopup);
});
