function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("thin", "pesto", ["feta"], ["spinach"]);
var p4 = pizzaOven("New York style", "traditional", ["mozzarella"], ["pepperoni"]);
console.log(p1, p2, p3, p4);


var crustArr = ["deep dish", "hand tossed", "thin", "Detroit style", "New York style"];
var sauceArr = ["traditional", "marinara", "pesto", "white"];
var cheeseArr = ["mozzarella", "feta", "ricotta", "American", "provolone"];
var toppingsArr = ["pepperoni", "sausage", "pineapple", "mushrooms", "peppers", "onions", "olives", "spinach", "chicken"];