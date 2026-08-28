const restaurant = {
  name: "KFC",
  location: "Walton Road Lahore",
  categories: ["Organic Food", "Fast Food", "Vegitables", "Sae Food"],
  starterMenu: ["Drinks", "Fries", "Sweets", "Juices", "Salad"],
  mainMenu: [
    "Biryani",
    "Burgers",
    "Pizzas",
    "Chicken Karahi",
    "Mutton Karahi",
    "Chicken Sajji",
    "Fish",
  ],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destrucuring of Arrays
const arr = [2, 3, 7];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
console.log(arr);
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , , secondary] = restaurant.categories;
console.log(main, secondary);

// Swapping the Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(restaurant.order(2, 0));
const [first, second] = restaurant.order(2, 0);
console.log(first, second);
