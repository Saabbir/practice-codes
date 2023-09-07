// ES2015 Arrow function expression

var sayName = (name) => console.log(`Hi ${name}`);

// Need wrap arguemnt with first braces if arguments are more than one
var sayNames = (name1, name2) => {
  console.log(`Hi ${name1}, ${name2}`);
};

sayName("John");
sayNames("Lara", "Mike");

var person = {
  first: "Tuhin",
  likes: ["Programming", "Watching Movies", "Walking"],
  // this.first is not working on anonymous function in ES5 but it does in ES2015
  print() {
    this.likes.forEach((action) => {
      console.log(`${this.first} likes to ${action}`);
    });
  },
};

person.print();
