// Arrays and Arrays Methods
const friends = ["Shoaib", "Fahad", "John", "Bob", "Jalal"];
// length: 5
// Index: 0, 1, 2, 3, 4
// Elements:
// Array Name:
console.log(friends);
console.log(friends[2]);
console.log(friends[1]);
console.log(friends[3]);
console.log(friends.length);
// Looping the Arrays
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
// Arrays Methods
// push(): To add the element at the End of the Array
friends.push("Imran Khan");
console.log(friends);
// unshift: To add Element at the begining of the array
friends.unshift("Imtiaz", "Ali");
console.log(friends);

// pop(): To Remove Elements from the end of the Array
friends.pop();
console.log(friends);

// shift(): To remove Elements from starting of the Array
friends.shift();
console.log(friends);

// includes
console.log(friends.includes("Jalal"));
console.log(friends.includes("imtiaz"));

friends[3] = "";
console.log(friends);
