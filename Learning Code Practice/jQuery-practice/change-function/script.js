$(document).ready(function(){
	
	function changeColor() {
		var color = $("#select").val();
		$("body").css("background", color);		
	}
	
	changeColor();
	
	$("#select").change(changeColor);
	
});