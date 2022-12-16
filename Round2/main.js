const menuBtn = document.querySelector(".nav-menu__box");
const menuScreen = document.querySelector(".nav-menu__fullscreen");
const formPopUp = document.querySelector(".contact-form-container");
const formPopUpCloseOutIcon = document.querySelector(".close-icon");
const formPopUpSubmitBtn = document.querySelector(".form-submit-btn");
const heroText = document.querySelector(".hero-text-box");
let isFormOpen = false;
let shouldFormClose = false;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuBtn.classList.toggle("close");
  menuScreen.classList.toggle("open");
  heroText.classList.toggle("hide");
});

// Open/close the Contact Us button
formPopUp.addEventListener("click", () => {
  if (!isFormOpen) {
    formPopUp.classList.toggle("open");
    isFormOpen = true;
  } else if (shouldFormClose) {
    formPopUp.classList.toggle("open");
    isFormOpen = false;
    shouldFormClose = false;
  }
});

// If the "x" or form submitted are clicked, set shouldFormClose to true
formPopUpCloseOutIcon.addEventListener("click", () => {
  shouldFormClose = true;
});

formPopUpSubmitBtn.addEventListener("click", () => {
  if (form.valid) {
    // Throws an error, but still works. I accept this as this is a learning project
    shouldFormClose = true;
    console.log("form is valid form");
  } else {
    console.log("form is valid");
  }
});
