localStorage.clear();
// Get all the elements that will be changed based on the theme
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#theme-toggle");
const darkModeImg = document.getElementById("theme-img");
const controlImg = document.getElementById("control-img");
const siriImg = document.getElementById("siri-img");

const logos = document.getElementsByClassName("logo");
const nextIcons = document.getElementsByClassName("next-icon");
const triangleIcons = document.getElementsByClassName("triangle-icon");
const faqIcons = document.getElementsByClassName("faq-icon");

const enableDarkMode = () => {
	// Adds a class to the body with new values for color variables
	document.body.classList.add("darkmode");
	// adds classes that change icons, background and src of images
	menuToggle.classList.add("white-icon");
	darkModeImg.src = "icons/dark/toggler-dark.svg";
	controlImg.src = "images/dark/controls-dark.webp";
	siriImg.src = "images/dark/Siri-dark.svg";

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
	menuToggle.classList.remove("white-icon");
	darkModeImg.src = "icons/light/toggler-light.svg";
	controlImg.src = "images/light/controls-light.png";
	siriImg.src = "images/light/Siri-light.svg";

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
	localStorage.setItem("darkMode", "disabled");
};

// Gets the preferred theme of the user
const getPreferredScheme = () =>
	window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches
		? "dark"
		: "light";

let systemPreference = getPreferredScheme();

// Checks first if the local item "darkMode" exists
if (localStorage.getItem("darkMode") != null) {
	// If it does, checks the value and enables or not the dark theme
	if (darkMode === "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
	// If the item is empty, checks the preferred theme of the user
} else if (systemPreference === "dark") {
	enableDarkMode();
}

// Changes theme on button click
darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");

	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
