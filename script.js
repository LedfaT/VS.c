const btnsOpen = document.querySelectorAll(".arrow");
const nav = document.querySelector(".nav");

console.log(btnsOpen);
btnsOpen.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const targ = e.target;
    const data = e.target.closest(".code__info").dataset.ex;
    document.querySelector(`.exemple--${data}`).classList.remove("hidden");
    targ.style.transform = "rotate(180deg)";
  });
});

const HandleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("a");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", HandleHover.bind(0.5));
nav.addEventListener("mouseout", HandleHover.bind(1));
