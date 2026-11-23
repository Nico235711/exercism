const PIZZA_PRICES = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10
}

const EXTRA_PRICES = {
  ExtraSauce: 1,
  ExtraToppings: 2
}

export function pizzaPrice(pizza, ...extra) {
  const basePrice = PIZZA_PRICES[pizza]
  const calculateCostWithToppings = (([current, ...rest]) => {
    if (current === undefined) return 0
    const currentTopicCost = EXTRA_PRICES[current]
    return currentTopicCost + calculateCostWithToppings(rest)
  })
  return basePrice + calculateCostWithToppings(extra)
}

// Provided the pizza's name as the first argument, and an unlimited number of added options, calculate the price of the pizza in dollars.

console.log(pizzaPrice('Margherita')); // => 7
console.log(pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings')); // => 12
console.log(pizzaPrice('Caprese', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings')); // => 17

// Your function is called with a list of PizzaOrders and should return the total price of the order in dollars. Each PizzaOrder has a pizza property - the pizza's name, and an extras property - the list of extra options.

export function orderPrice(pizzaOrders) {
  throw new Error('Remove this line and implement the function');
}