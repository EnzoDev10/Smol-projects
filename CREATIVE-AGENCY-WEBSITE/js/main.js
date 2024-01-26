const toggleBtn = document.querySelector(".toggle");
const menu = document.querySelector("footer");

toggleBtn.addEventListener("click", () => {
  const menuIcon = toggleBtn.querySelector("img");
  if (menuIcon.src.endsWith("menu.png")) {
    menuIcon.src = "images/assets/close.png";
  } else {
    menuIcon.src = "images/assets/menu.png";
  }
  menu.classList.toggle("active");
});
