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
  openingHours: {
    thur: {
      open: 8,
      close: 9,
    },
    fri: {
      open: 9,
      close: 6,
    },
    sat: {
      open: 10,
      close: 10,
    },
  },
  orderDelivery: function ({
    time = "10:00pm",
    address = "Johar Town",
    starterIndex = 2,
    mainIndex = 2,
  }) {
    // return obj;
    // console.log(obj);
    // console.log(obj.time);
    // console.log(
    //   `Order Received! The order of ${this.starterMenu[obj["starterIndex"]]} and ${this.mainMenu[obj["mainIndex"]]} will be delivered to ${obj["address"]} at ${obj["time"]}`,
    // );
    return `Order Received! The order of ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
  },
};
console.log(
  restaurant.orderDelivery({
    // time: "9:00pm",
    // address: "Walton Road, Lahore",
    starterIndex: 3,
    mainIndex: 1,
  }),
);
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

// Nested Destructure of Arrays
const nested = [2, 4, 6, [7, 9, 10]];
const [p, q, r, [s, t, u]] = nested;
console.log(p, q, r, s, t, u);

const [k = 1, l = 1, m = 1, n = 1] = [12, 20, 45];
console.log(k, l, m, n);

// Destructuring of Objects
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(name, openingHours, categories);
console.log(restaurantName, hours, tags);

const { thur, fri, sat } = restaurant.openingHours;
console.log(thur, fri, sat);
const { open: o, close: cl } = restaurant.openingHours.fri;
console.log(o, cl);

// Off-Page SEO:
// Website link to otherWebsites
// Mozbar
// DA: Domain Authrity (1 to 100)
// PA: Page Authority (1 to 100)
// Spam Score: (0% to 100%)

// Filter:
// DA: 90+
// PA: 80+
// SS: 0% to 10%

// Types of Backlinks
