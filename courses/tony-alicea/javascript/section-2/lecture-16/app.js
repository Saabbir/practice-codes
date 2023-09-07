// Long running function
function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime(); // The getTime method of the Date object will return current time in millisecond
	while (new Date() < ms) {} // Here new Date() coerced to a number. Like this - Number(new Date())
	console.log('finished function');
}

function clickHandler() {
	console.log('click event!');
}

// Listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');