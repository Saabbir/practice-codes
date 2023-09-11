$(document).ready(function() {
	$(".nav li").hover(function () {
		$(this).find("ul").stop().slideToggle(400);
	});
	
});