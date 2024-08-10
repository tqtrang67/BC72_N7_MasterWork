document.getElementById("switchButton").onclick = function () {
	document.getElementById("myBody").classList.toggle("dark");
};

$(window).on("scroll", function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 80) {
		$("#site-header").addClass("nav-fixed");
	} else {
		$("#site-header").removeClass("nav-fixed");
	}
});

// button navbar-toggle
$(".navbar-toggler").on("click", function () {
	$("header").toggleClass("active");
});
$(document).on("ready", function () {
	if ($(window).width() > 991) {
		$("header").removeClass("active");
	}
	$(window).on("resize", function () {
		if ($(window).width() > 991) {
			$("header").removeClass("active");
		}
	});
});
