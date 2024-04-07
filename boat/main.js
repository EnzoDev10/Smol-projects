/* Menu */
const menuToggle = document.getElementById("menu-toggler");

menuToggle.addEventListener("click", function () {
	let menu = document.getElementById("nav-menu");
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
	} else {
		menu.classList.add("active");
	}
});

/* Change between footer links */
const radioBtns = document.getElementsByClassName("link-radio");
const shopList = document.getElementById("shop-list");
const companyList = document.getElementById("company-list");
const helpList = document.getElementById("help-list");

function showStuff(id, btn) {
	shopList.style.display = "none";
	companyList.style.display = "none";
	helpList.style.display = "none";

	if (document.getElementById(id).style.display == "none") {
		document.getElementById(id).style.display = "grid";
	}
}

/* Theme toggler */
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#theme-toggle");
const controlImg = document.getElementById("control-img");
const siriImg = document.getElementById("siri-img");
const tableBg = document.getElementById("table-bg");

const logos = document.getElementsByClassName("logo");
const nextIcons = document.getElementsByClassName("next-icon");
const triangleIcons = document.getElementsByClassName("triangle-icon");
const faqIcons = document.getElementsByClassName("faq-icon");
// Check if dark mode is enabled
// If it's enabled, turn it off
// If it's disabled, turn it on

const enableDarkMode = () => {
	// 1. Add the class darkmode to the body
	document.body.classList.add("darkmode");
	darkModeToggle.classList.add("dark");
	menuToggle.classList.add("dark");
	controlImg.src = "images/dark/controls-dark.png";
	siriImg.src = "images/dark/siri-dark.png";
	tableBg.style.backgroundImage = "url('images/dark/table-bg-dark.svg')";

	Array.from(logos).forEach((logo) => {
		logo.src = "icons/dark/logo-dark.svg";
	});

	Array.from(nextIcons).forEach((icon) => {
		icon.src = "icons/dark/next-dark.svg";
	});

	Array.from(triangleIcons).forEach((icon) => {
		icon.src = "icons/dark/triangle-dark.svg";
	});

	Array.from(faqIcons).forEach((icon) => {
		icon.src = "icons/dark/faq-icon-dark.svg";
	});

	// 2. update darkmode in the localStorage
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	// 1. Add the class darkmode to the body
	document.body.classList.remove("darkmode");
	darkModeToggle.classList.remove("dark");
	menuToggle.classList.remove("dark");
	controlImg.src = "images/light/controls-light.png";
	siriImg.src = "images/light/siri-light.png";
	tableBg.style.backgroundImage = "url('images/light/table-bg-light.svg')";

	Array.from(logos).forEach((logo) => {
		logo.src = "icons/light/logo-light.svg";
	});

	Array.from(nextIcons).forEach((icon) => {
		icon.src = "icons/light/next-light.svg";
	});

	Array.from(triangleIcons).forEach((icon) => {
		icon.src = "icons/light/triangle-light.svg";
	});

	Array.from(faqIcons).forEach((icon) => {
		icon.src = "icons/light/faq-icon-light.svg";
	});

	// 2. update darkmode in the localStorage
	localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");

	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
