// const toggle = document.getElementById("toggleDark");
// const body = document.querySelector("body");

// toggle.addEventListener("click", function () {
// 	this.classList.toggle("fa-sun");
// 	if (this.classList.toggle("fa-moon")) {
// 		body.style.backgroundColor = "white";
// 		body.style.color = "black";
// 		body.style.transition = "2s";
// 	} else {
// 		body.style.backgroundColor = "black";
// 		body.style.color = "white";
// 		body.style.transition = "2s";
// 	}
// });

document.getElementById("switchButton").onclick = function () {
	document.getElementById("myBody").classList.toggle("dark");
};
