const hamburger = document.querySelector(".hamburger svg");
const navMenu = document.querySelector("nav");
const navLink = document.querySelectorAll("nav a");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}