var objectLiteral = {
	firstname: 'Saabbir',
	lastname: 'Hossain'
};

var objToJSON = JSON.stringify(objectLiteral); // Convert object into JSON string
console.log(objToJSON);

var JSONToObj = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true}'); // Convert JSON string into object
console.log(JSONToObj);