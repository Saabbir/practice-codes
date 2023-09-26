$('#login').click(function () {

	// hide the login on the screen
	$('#loginDiv').hide();

	// store the current value from the select option
	var lang = $('#lang').val();

	// create a new `Greetr` object
	var loginGrtr = G$('Jhon', 'Doe');		

	// fire off an HTML greeting, 
	// passing the `#greeting` as the selector 
	// and the chosen language, 
	// and log the welcome as well
	loginGrtr.setLang(lang).HTMLGreeting('#greeting', true).log();

});