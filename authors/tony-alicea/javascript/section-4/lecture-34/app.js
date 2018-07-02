/*
	NOTE:
	> JavaScript arrays are zero based.
	> JavaScript arrays can hold any data type.
*/

var arr = [
	1,
	false,
	{
		name: 'Saabbir',
		address: '111 Main St.'
	},
	function(name) {
		var greeting = 'Hello ';
		console.log(greeting + name);
	},
	'String'
]

console.log(arr);
arr[3](arr[2].name); // Hello Saabbir