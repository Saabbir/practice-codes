function a() {

	function b() {
		console.log(myVar); // Logs 2

		// This function holds reference to it's outer enviroment lexically
	}

	var myVar = 2;

	b();
}

var myVar = 1;

a();