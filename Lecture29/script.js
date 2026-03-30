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
  openingHours: {
    thur: {
      open: 7,
      close: 6,
    },
    fri: {
      open: 8,
      close: 7,
    },
    sat: {
      open: 9,
      close: 10,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    // console.log(obj);
    // console.log(time, address, mainIndex, starterIndex);
    console.log(
      `Order Recevied! The order of ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
};
restaurant.orderDelivery({
  time: "9:00pm",
  address: "Brains College Walton Road Lahore",
  mainIndex: 2,
  starterIndex: 2,
});
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

console.log(restaurant.order(2, 0));
const [firstItem, secondItem] = restaurant.order(2, 0);
console.log(firstItem, secondItem);

// Default Values
const newArray = [3, 7, 9];
const [m = 1, n = 1, o = 1] = newArray;
console.log(m, n, o);

// Geeks for Geeks
// Leetcode
// Hacker Rank

// Domain Name: Unique Name of a website

// User       Google       Server (Hosting)
// Destructuring Of Objects
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(name, openingHours, categories);
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let f = 111;
let g = 999;
console.log(f, g);
let obj = { f: 3, g: 9, h: 8 };
({ f, g } = obj);
console.log(f, g);

// Nested Objects
const {
  thur: { open: op, close: cl },
} = restaurant.openingHours;
console.log(op, cl);
//  The Spread Operator
const newArrayy = [8, 9, 10, 11];
const goodArray = [
  1,
  2,
  3,
  4,
  newArrayy[0],
  newArrayy[1],
  newArrayy[2],
  newArrayy[3],
];
console.log(goodArray);
const newGoodArray = [1, 2, 3, 4, 5, 6, 7, ...newArrayy];
console.log(newGoodArray);
console.log(...restaurant.categories);
// Clone the Array
const copyArray = [
  "Fish",
  "Chicken Sajji",
  ...restaurant.mainMenu,
  "Mutton Karahi",
];
// The Spread operator with strings
console.log(copyArray);
const firstName = "Jonas";
console.log(...firstName);

// Merge different Arrays
const MainMenu = [
  ...restaurant.categories,
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

console.log(MainMenu);
