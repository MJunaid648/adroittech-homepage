const modal = document.getElementById("myModal");
const okayBtn = document.querySelector(".okayBtn");

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("close");
}
function showModal(event) {
  //   event.preventDefault(); // Prevent form submission
  console.log(modal.classList);
  modal.classList.remove("close");
  modal.classList.add("show");
  console.log(modal.classList);
}

okayBtn.addEventListener("click", closeModal);
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
