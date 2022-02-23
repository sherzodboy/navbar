let openIcon = document.querySelector(".fa-bars");
let closeIcon = document.querySelector(".fa-times");
let menuList = document.querySelector(".nav_menu");

openIcon.addEventListener("click", function () {
  menuList.classList.toggle("show");
});
closeIcon.addEventListener("click", function () {
  menuList.classList.remove("show");
});
