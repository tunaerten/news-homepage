"use strict";

const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");
const navMobile = document.querySelector(".main-nav-list-mobile");
const closeMenuEl = document.querySelector(".close-menu");
const body = document.querySelector("body");
const mainNav = document.querySelector(".main-nav");

const toggleMenu = () => {
  overlay.classList.toggle("active");
  closeMenuEl.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  navMobile.classList.toggle("active");

  body.style.overflow = overlay.classList.contains("active") ? "hidden" : "";

  if (hamburgerMenu.classList.contains("active")) {
    hamburgerMenu.setAttribute("aria-expanded", "true");
  } else {
    hamburgerMenu.setAttribute("aria-expanded", "false");
  }
};

const closeMenu = () => {
  if (overlay.classList.contains("active")) {
    toggleMenu();
  }
};

if (hamburgerMenu) hamburgerMenu.addEventListener("click", toggleMenu);
if (closeMenuEl) closeMenuEl.addEventListener("click", toggleMenu);

document.addEventListener("click", (event) => {
  if (
    !hamburgerMenu.contains(event.target) &&
    !navMobile.contains(event.target) &&
    !closeMenuEl.contains(event.target)
  ) {
    closeMenu();
  }
});

window.addEventListener("resize", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
