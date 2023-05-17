const express = require("express");
const app = express();

const fruit = ["Apple", "Banana"];

// http://localhost:8080/
app.get("/", (request, response) => {
  response.send("Hello World");
});

// http://localhost:8080/fruit
app.get("/fruit", (request, response) => {
  response.send(fruit);
});

app.get("/user/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.listen(8080, () => {
  console.log("Application listening to port 8080");
});
