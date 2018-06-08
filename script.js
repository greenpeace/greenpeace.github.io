
document.addEventListener("DOMContentLoaded", function() {

	let slides        = document.querySelectorAll('#large_slides .slide');
	let currentSlide  = 0;
	let next          = document.getElementById('next');
	let previous      = document.getElementById('previous');
	//let slideInterval = setInterval(nextSlide,2000);

	let large_button  = document.getElementsByClassName("large-button")[0];
	let large_box     = document.getElementsByClassName("large-box")[0];
	let medium_button = document.getElementsByClassName("medium-button")[0];
	let medium_box    = document.getElementsByClassName("medium-box")[0];

	large_button.addEventListener("click", function (event) {
		large_box.style.display  = "block";
		medium_box.style.display = "none";
		slides = document.querySelectorAll('#large_slides .slide');
	});

	medium_button.addEventListener("click", function (event) {
		medium_box.style.display = "block";
		large_box.style.display  = "none";
		slides = document.querySelectorAll('#medium_slides .slide');
	});

	next.onclick = function() {
		nextSlide();
	};
	previous.onclick = function() {
		previousSlide();
	};

	function nextSlide() {
		goToSlide(currentSlide+1);
	}

	function previousSlide() {
		goToSlide(currentSlide-1);
	}

	function goToSlide(n) {
		slides[currentSlide].className = 'slide';
		currentSlide = (n+slides.length)%slides.length;
		slides[currentSlide].className = 'slide showing';
	}
});
