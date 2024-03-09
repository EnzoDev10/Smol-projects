const stopPlayIcon = document.getElementById("stop-play");

stopPlayIcon.addEventListener("click", () => {
	if (stopPlayIcon.src.endsWith("/pause.svg")) {
		console.log(stopPlayIcon.src);
		stopPlayIcon.src = "media\\play.svg";
	} else {
		stopPlayIcon.src = "media\\pause.svg";
	}
});

// Timer Steps(MVP):

// 1 Get the current date
let now = new Date().getTime();

// 2 Set the date we're countind down to,
// in this case one hour of difference with the first time you check the time

let countDownDate = new Date(now + 3600000);

// 3 Set an interval that updates every one second and inside:

setInterval(() => {
	now = new Date().getTime();
	// 4 Find the distance between both dates
	let distance = countDownDate - now;

	// 5 Calculate time for hours, minutes and seconds

	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("timer").innerHTML =
		hours + " : " + minutes + " : " + seconds;
}, 1000);

// Display the result in the element with id of "timer"

// If the count down is finished, write a message
