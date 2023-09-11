$(document).ready(function() {
	$(".clickMe").click(function() {
		alert("Welcome");
	});
	$("#contains").click(function() {
		$("p:contains('E')").show(300);
	});
	
	$("h1:even").addClass("even");
	$("h1:odd").addClass("odd");
	$(":input:text").addClass("text");
	$(":input:password").addClass("password");
});