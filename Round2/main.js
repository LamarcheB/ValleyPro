const menuBtn = document.querySelector(".nav-menu__box");
const menuScreen = document.querySelector(".nav-menu__fullscreen");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuBtn.classList.toggle("close");
  menuScreen.classList.toggle("open");

  // NEED TO ADD A THING TO ADD/REMOVE a class for close
});

console.log("hello world");
