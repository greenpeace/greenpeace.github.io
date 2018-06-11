
document.addEventListener("DOMContentLoaded", function() {

	let slides       = document.querySelectorAll('#large_slides .slide');	// Initially show the large slides.
	let currentSlide = 0;
	let next         = document.getElementById('next');
	let previous     = document.getElementById('previous');
	//let slideInterval = setInterval(nextSlide,2000);

	let large_button  = document.getElementsByClassName("large-button")[0];
	let large_box     = document.getElementsByClassName("large-box")[0];
	let medium_button = document.getElementsByClassName("medium-button")[0];
	let medium_box    = document.getElementsByClassName("medium-box")[0];
	let retina_large_button = document.getElementsByClassName("retina-large-button")[0];
	let retina_large_box    = document.getElementsByClassName("retina-large-box")[0];


	large_button.addEventListener("click", function (event) {
		large_box.style.display        = "block";
		medium_box.style.display       = "none";
		retina_large_box.style.display = "none";
		slides[currentSlide].className = 'slide';
		slides = document.querySelectorAll('#large_slides .slide');
		goToSlide(0);
	});

	medium_button.addEventListener("click", function (event) {
		large_box.style.display        = "none";
		medium_box.style.display       = "block";
		retina_large_box.style.display = "none";
		slides[currentSlide].className = 'slide';
		slides = document.querySelectorAll('#medium_slides .slide');
		goToSlide(0);
	});

	retina_large_button.addEventListener("click", function (event) {
		large_box.style.display        = "none";
		medium_box.style.display       = "none";
		retina_large_box.style.display = "block";
		slides[currentSlide].className = 'slide';
		slides = document.querySelectorAll('#retina_large_slides .slide');
		goToSlide(0);
	});

	next.onclick = function() {
		nextSlide();
	};
	previous.onclick = function() {
		previousSlide();
	};

	document.onkeydown = function switchSlideWithArrows(event) {
		event.preventDefault();
		if ( 37 === event.keyCode ) {
			previousSlide();
		} else if ( 39 === event.keyCode ) {
			nextSlide();
		}
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
