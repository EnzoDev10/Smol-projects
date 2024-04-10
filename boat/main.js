/* Menu */
const menuToggle = document.getElementById("menu-toggler");
let menu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
		menuToggle.style.backgroundImage = "url('icons/light/menu-light.svg')";
	} else {
		menu.classList.add("active");
		menuToggle.style.backgroundImage = "url('icons/light/close-light1.svg')";
	}
});

window.addEventListener("resize", function() {
	if (window.innerWidth > 1023) menu.classList.remove("active");
  });

/* Change between footer links */
// gets all the radio buttons and each list on the footer
const radioBtns = document.getElementsByClassName("link-radio");
const shopList = document.getElementById("shop-list");
const companyList = document.getElementById("company-list");
const helpList = document.getElementById("help-list");

function showStuff(id, btn) {
	// set's display of all the list to none
	// so only one list is visible after each call
	shopList.style.display = "none";
	companyList.style.display = "none";
	helpList.style.display = "none";

	// Makes the list visible
	if (document.getElementById(id).style.display == "none") {
		document.getElementById(id).style.display = "grid";
	}
}
