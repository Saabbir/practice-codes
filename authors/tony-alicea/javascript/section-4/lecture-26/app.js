/*

We can create object in a couple of ways. One of is using object constructor. 
But this is not the preferred way. We can access and set property in a object 
using both bracket notation and dot notation. But dot notation is preferred way. 
Bracket notation can be helpful if we want to dynamically access property key string.

*/

var person = new Object(); // Created object using object constructor

person["firstname"] = "Saabbir"; // Created property using bracket notation
person["lastname"] = "Hossain";

var firstnameProperty = "firstname";

console.log(person);

console.log(person[firstnameProperty]);  // Access property dynamically using variable

console.log(person.lastname);  // Access property using dot notation

person.address = new Object();  // Created inner object using object constructor
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY"; // Created inner object property using dot constructor

console.log(person.address.street);
console.log(person["address"].city); // Access inner object property using both bracket and dot notation
console.log(person["address"]["state"]);