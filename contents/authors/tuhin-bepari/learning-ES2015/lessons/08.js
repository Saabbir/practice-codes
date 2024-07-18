/**
 * ES2015 Classes
 */

class Car {
  constructor(brand, model, description, price) {
    this.brand = brand;
    this.model = model;
    this.description = description;
    this.price = price;
    this._serviceCharge = 10;
  }

  // Like computed property of Vue 2
  get grandTotal() {
    return this.price + this._serviceCharge;
  }

  // Setter of serviceCharge Property
  set serviceCharge(value) {
    this._serviceCharge = parseFloat(value);
  }

  info() {
    return `Brand : ${this.brand}
      Model: ${this.model}
      Description ${this.description}
      Price $${this.price}
    `;
  }

  static brand() {
    return "Hello From Static Method";
  }
}

class Marcedes extends Car {
  constructor(model, description, price) {
    super("Marcedes", model, description, price);
    this._serviceCharge = 130;
  }

  info() {
    var description = super.info();
    return description + " Country of origin is Germany";
  }
}

var marcedies = new Car("Marcedes", "X102", "Worlds luxurious car", 254444);
console.log(marcedies.info());

var xmar = new Marcedes("Xmar2017", "Electric cars", 4500);
xmar.serviceCharge = 450;
console.log(xmar.info());
console.log(xmar.grandTotal);

console.log(Marcedes.brand());
