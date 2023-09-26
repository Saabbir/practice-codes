$(document).ready(function() {
	$(".hide").dblclick(function() {
		$(".box").hide(2000);
	});
	$(".show").dblclick(function() {
		$(".box").show(2000);
	});
	$(".fade-out").dblclick(function() {
		$(".box").fadeOut(2000);
	});
	$(".fade-in").dblclick(function() {
		$(".box").fadeIn(2000);
	});
	$(".slide-up").dblclick(function() {
		$(".box").slideUp(2000);
	});
	$(".slide-down").dblclick(function() {
		$(".box").slideDown(2000);
	});
});