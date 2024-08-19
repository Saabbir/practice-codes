const PizzaShop = require("./PizzaShop");
const DrinkMachine = require("./DrinkMachine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received: ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
  pizzaShop.displayOrderCount();
});

pizzaShop.order("large", "mashroom");
pizzaShop.order("small", "vegetable");
pizzaShop.order("medium", "cheese");
pizzaShop.order("large", "spinach");
