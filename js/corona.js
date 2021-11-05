let scroll = document.querySelector(".scroll");

document.onscroll = function () {
  if (window.scrollY >= 51) {
    console.log("hello");
    scroll.classList.add("show");
  } else {
    scroll.classList.remove("show");
  }
};

let navbar = document.querySelector(".navbar");
window.onscroll = function () {
  if (window.scrollY >= 51) {
    navbar.classList.add("white-background");
  } else {
    navbar.classList.remove("white-background");
  }
};

console.log(window.scrollY);
