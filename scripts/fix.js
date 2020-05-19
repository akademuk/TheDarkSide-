document.querySelector("button").addEventListener("click", (event) => {
  document.body.classList.add("open");
});
document.querySelector(".overlay").addEventListener("click", (event) => {
  document.body.classList.remove("open");
});
