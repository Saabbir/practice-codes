function a() {

	function b() {
		console.log(myVar); // This will print 2 for it's lexical outer environments reference
	}

	var myVar = 2;

	b();
}

var myVar = 1;

a();