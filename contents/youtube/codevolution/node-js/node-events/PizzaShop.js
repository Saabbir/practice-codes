const EventEmitter = require("events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderCount = 0;
  }

  order(size, topping) {
    this.orderCount++;
    this.emit("order", size, topping);
  }

  displayOrderCount() {
    console.log("Current order count: ", this.orderCount);
  }
}

module.exports = PizzaShop;
