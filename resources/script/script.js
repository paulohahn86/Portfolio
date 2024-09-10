const elIconMenu = document.getElementById("icon-menu");
const elMenuMobile = document.getElementById("menu-mobile");
const elMenuBars = document.querySelector(".fa-bars");
const elMenuX = document.querySelector(".fa-x");

elIconMenu.onclick = () => {
  if (elMenuMobile.style.display === "none") {
    elMenuMobile.style.display = "block";
    elMenuBars.style.display = "none";
    elMenuX.style.display = "block";
  } else {
    elMenuMobile.style.display = "none";
    elMenuBars.style.display = "block";
    elMenuX.style.display = "none";
  }
};
