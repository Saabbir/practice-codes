var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (var i = 1; i <= 5; i++) {
	var newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/pic' + i + '.jpg');
	thumbBar.appendChild(newImage);

	newImage.onclick = function(e) {
		displayedImage.src = e.target.src;
	}
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', changeOverlay);

function changeOverlay(e) {
	if (e.target.textContent === 'Darken') {
		e.target.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	} else {
		e.target.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}