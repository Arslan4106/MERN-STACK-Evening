// Destructuing of Arrays
const restaurant = {
  name: "kfc",
  location: "Walton Road Lahore",
  categories: ["Desi Food", "Fast Food", "Organic Food", "Vegiterian"],
  starterMenu: ["Fries", "Salad", "Russian Salad", "Drinks", "Sweets"],
  mainMenu: [
    "Pizzas",
    "Chicken Karahi",
    "Qourma",
    "Burgers",
    "Vegetables Rice",
  ],
  order: function (starterIndex, mainIndex) {},
};

// Destructuring of Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , , secondory] = restaurant.categories;
console.log(main, secondory);
// Swaping the Variables
// let temp = main;
// main = secondory;
// secondory = temp;
// console.log(main, secondory);
[main, secondory] = [secondory, main];
console.log(main, secondory);

// Destructuring of Nested Array
const nested = [2, 3, [5, 6]];
// console.log(nested);
const [p, , [q, r]] = nested;
console.log(p, q, r);
