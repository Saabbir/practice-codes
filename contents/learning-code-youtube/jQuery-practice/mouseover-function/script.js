$(document).ready(function() {
	$(".hide").mouseover(function() {
		$(".box").hide(2000);
	});
	$(".show").mouseover(function() {
		$(".box").show(2000);
	});
	$(".fade-out").mouseover(function() {
		$(".box").fadeOut(2000);
	});
	$(".fade-in").mouseover(function() {
		$(".box").fadeIn(2000);
	});
	$(".slide-up").mouseover(function() {
		$(".box").slideUp(2000);
	});
	$(".slide-down").mouseover(function() {
		$(".box").slideDown(2000);
	});
});