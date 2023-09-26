$(document).ready(function() {
	$(".hide").mouseout(function() {
		$(".box").hide(2000);
	});
	$(".show").mouseout(function() {
		$(".box").show(2000);
	});
	$(".fade-out").mouseout(function() {
		$(".box").fadeOut(2000);
	});
	$(".fade-in").mouseout(function() {
		$(".box").fadeIn(2000);
	});
	$(".slide-up").mouseout(function() {
		$(".box").slideUp(2000);
	});
	$(".slide-down").mouseout(function() {
		$(".box").slideDown(2000);
	});
	
	$(".both").mouseover(function() {
		$(".box").show(2000);
		$(".both").val("Mouseout to Hide")
	})
	$(".both").mouseout(function() {
		$(".box").hide(2000);
		$(".both").val("Mouseover to Show");
	})
});