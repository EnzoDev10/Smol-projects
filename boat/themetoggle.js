
// Get all the elements that will be changed based on the theme
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#theme-toggle");
const controlImg = document.getElementById("control-img");
const siriImg = document.getElementById("siri-img");
const tableBg = document.getElementById("table-bg");

const logos = document.getElementsByClassName("logo");
const nextIcons = document.getElementsByClassName("next-icon");
const triangleIcons = document.getElementsByClassName("triangle-icon");
const faqIcons = document.getElementsByClassName("faq-icon");


const enableDarkMode = () => {
	// Adds a class to the body with new values for color variables
	document.body.classList.add("darkmode");
    // adds classes that change icons, background and src of images
	darkModeToggle.classList.add("dark");
	menuToggle.classList.add("white-icon");
	controlImg.src = "images/dark/controls-dark.png";
	siriImg.src = "images/dark/Siri-dark.svg";
	tableBg.style.backgroundImage = "url('images/dark/table-bg-dark.svg')";

	Array.from(logos).forEach((logo) => {
		logo.src = "icons/dark/logo-dark.png";
	});

	Array.from(nextIcons).forEach((icon) => {
		icon.classList.add("white-icon");
	});

	Array.from(triangleIcons).forEach((icon) => {
		icon.classList.add("white-icon");

	});

	Array.from(faqIcons).forEach((icon) => {
		icon.classList.add("white-icon");

	});

	// 2. update darkmode in the localStorage
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	// on call removes the classes and reverts the src of images to the original ones
	document.body.classList.remove("darkmode");
	darkModeToggle.classList.remove("dark");
	menuToggle.classList.remove("white-icon");
	controlImg.src = "images/light/controls-light.png";
	siriImg.src = "images/light/Siri-light.svg";
	tableBg.style.backgroundImage = "url('images/light/table-bg-light.svg')";

	Array.from(logos).forEach((logo) => {
		logo.src = "icons/light/logo-light.png";
	});

	Array.from(nextIcons).forEach((icon) => {
		icon.classList.remove("white-icon");

	});

	Array.from(triangleIcons).forEach((icon) => {
		icon.classList.remove("white-icon");

	});

	Array.from(faqIcons).forEach((icon) => {
		icon.classList.remove("white-icon");

	});

	// 2. update darkmode in the localStorage
	localStorage.setItem("darkMode", null);
};

    // checks on page load if the last time the darkmode was enabled
    // if it is, enables darkmode again
if (darkMode === "enabled") {
	enableDarkMode();
}

// on click checks if darkmode is enabled or not
darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");

	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
