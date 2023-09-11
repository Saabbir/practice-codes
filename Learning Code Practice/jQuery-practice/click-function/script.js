$(document).ready(function() {
	$(".hide").click(function() {
		$(".box").hide(2000);
	});
	$(".show").click(function() {
		$(".box").show(2000);
	});
	$(".fade-out").click(function() {
		$(".box").fadeOut(2000);
	});
	$(".fade-in").click(function() {
		$(".box").fadeIn(2000);
	});
	$(".slide-up").click(function() {
		$(".box").slideUp(2000);
	});
	$(".slide-down").click(function() {
		$(".box").slideDown(2000);
	});
});