function play(url) {
	let audio = document.getElementById("audio");

	audio.src = url;

	audio.play();
}
