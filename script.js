const btnsOpen = document.querySelectorAll(".arrow");
const nav = document.querySelector(".nav");

console.log(btnsOpen);
btnsOpen.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const targ = e.target;
    const data = e.target.closest(".code__info").dataset.ex;
    const exemple = e.target.closest(".code__info").querySelector(".exemple");
    if (exemple.classList.contains("hidden")) {
      exemple.classList.remove("hidden");
      targ.style.transform = "rotate(0.5turn)";
    } else {
      exemple.classList.add("hidden");
      targ.style.transform = "rotate(1turn)";
    }
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

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  console.log(e);
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
