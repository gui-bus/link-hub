// Light/Dark
let trigger = document.getElementById("trigger");
let root = document.documentElement;
const switchInput = document.getElementById("switch-1");

switchInput.addEventListener("change", () => {
  if (switchInput.checked) {
    root.classList.add("light-theme");
  } else {
    root.classList.remove("light-theme");
  }
});

// Modal
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const body = document.getElementsByTagName("body")[0];

openButton.addEventListener("click", () => {
  modal.showModal();
  body.classList.add("dialog-opened");
});

closeButton.addEventListener("click", () => {
  modal.close();
  body.classList.remove("dialog-opened");
});
