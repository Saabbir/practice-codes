$(document).ready(function() {
	$(".password").keyup(function() {
		var len = $(".password").val().length;
		
		if(len<1) {
			$(".show_value").text("");
			$(".show_value").removeClass("red");
			$(".show_value").removeClass("orange");			
			$(".show_value").removeClass("green");				
		}
		else if(len<=4) {
			$(".show_value").text("Weak");
			$(".show_value").addClass("red");
			$(".show_value").removeClass("orange");			
			$(".show_value").removeClass("green");			
		}
		else if(len<=8) {
			$(".show_value").text("Medium");
			$(".show_value").addClass("orange");			
			$(".show_value").removeClass("red");			
			$(".show_value").removeClass("green");			
		}
		else{
			$(".show_value").text("Strong");
			$(".show_value").addClass("green");			
			$(".show_value").removeClass("red");			
			$(".show_value").addClass("orange");			
		}
	});
});