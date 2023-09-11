$(document).ready(function() {
	$(".start").click(function() {
		$(".box").text("Put your mouse over here to hide it");
		$(".box").bind("mouseover", function() {
			$(this).hide(2000);
		});
	});
	$(".stop").click(function() {
		$(".box").unbind("mouseover");
		$(".box").text("This will not work now")
	});
});