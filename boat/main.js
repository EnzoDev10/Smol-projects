document.getElementById("menu-toggler").addEventListener("click", function () {
	let menu = document.getElementById("nav-menu");
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
	} else {
		menu.classList.add("active");
	}
});
