// Objects in JS
const jonas = {
  name: "Jonas Bob",
  fatherName: "Bob",
  firstJob: "Web developer",
  currentJob: "Web Trainer",
  age: 2026 - 1999,
  location: "USA",
};
console.log(jonas);
// Dot Notation
console.log(jonas.name);
console.log(jonas.firstJob);
console.log(jonas.age);
// Bracket Notation
console.log(jonas["location"]);
console.log(jonas["name"]);
console.log(jonas["currentJob"]);

const restaurant = {
  name: "KFC",
  Location: "Walton Road Lahore",
  menu: ["Fast Food", "Organic Food", "Vegetables", "Desi Food"],
  starterMenu: ["Sweets", "Soap", "Salad", "Drinks", "Fries"],
  price: 500,
};
console.log(restaurant);
console.log(restaurant.menu);
console.log(restaurant.menu.length);
console.log(restaurant.menu[0]);
for (let i = 0; i < restaurant.menu.length; i++) {
  console.log(restaurant.menu[i]);
}
