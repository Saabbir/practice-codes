// check off specific todos by clicking
$('ul').on('click', 'li',function() {
	$(this).toggleClass('completed');
});

// click on X to delete todo
$('ul').on('click', 'span',function(event) {
	$(this).parent().fadeOut(400, function() {
		$(this).remove();
	});
	event.stopPropagation(); // it prevents from event bubbling
});

$('input[type="text"]').keypress(function(event) {
	if (event.which === 13) {
		// grabbing the input text
		var todoText = $(this).val();
		// clear the input text
		$(this).val('');
		/*
		** Create a li element
		** Append new todoText to the li element
		** Append li element to the ul element
		*/
		$('ul').append('<li><span class="fa fa-trash"></span> ' + todoText + '</li>');
	}
});

$('.fa-plus').click(function() {
	$('input[type="text"]').fadeToggle(400);
});