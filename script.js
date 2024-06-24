const btnsOpen = document.querySelectorAll(".arrow");
console.log(btnsOpen);
btnsOpen.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const targ = e.target;
    const data = e.target.closest(".code__info").dataset.ex;
    document.querySelector(`.exemple--${data}`).classList.remove("hidden");
    targ.style.transform = "rotate(180deg)";
  });
});
