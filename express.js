const express = require("express");
const app = express();
app.use(function (req, res, next) {
  console.log("We are working on Express Js");
  next();
});
app.use(function (req, res, next) {
  console.log("We have completed our Javascript");
  next();
});
app.get("/", function (req, res) {
  res.send(
    "This is a MERN Stack Class. And we are learning about Express Js. We have worked on multiple projects",
  );
});
app.get("/about", function (req, res) {
  res.send(
    "We have completed our 80% of sallybus. After We will learn about the Mongo DB. We will work on mongo DB with Mongoose and We will understand the CRUD operation in Mongo",
  );
});
app.listen(3000);
