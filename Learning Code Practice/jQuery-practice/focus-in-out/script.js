$(document).ready(function() {
	$(":input").focusin(function() {
		$(this).addClass("yellow");
	})
	$(":input").focusout(function() {
		$(this).removeClass("yellow");
	})
});