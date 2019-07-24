// ES2015 Destructuring assignments

// Destructuring Assignments
var [ first, , sylhet, ] = ["Dhaka", "Chittagong", "Sylhet", "Barisal"];
console.log(first, sylhet);

var person = {
    first: "Tuhin",
    last: "Bepari",
    likes: ["Programming", "Watching Movies", "Walking"],
    // this.first is not working on anonymous function in ES5 but it does in ES2015
    print(){
		this.likes.forEach( action => {
			console.log(`${this.first} likes to ${action}`)
		});
    }
}

function fullname( { first, last } ) {
    console.log(`Given person full name is ${first} ${last}`)
}

fullname( person );