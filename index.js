const express = require("express");
const app = express();

const fruit = ["Apple", "Banana"];

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// http://localhost:8080/
app.get("/", (request, response) => {
  response.send("Hello World");
});

// http://localhost:8080/fruit
app.get("/fruit", (request, response) => {
  response.send(fruit);
});

// http://localhost:8080/fruit - Testing request.body
app.post("/fruit", (req, res) => {
  let fruitToAdd = req.body.fruit;
  fruit.push(fruitToAdd);
  res.send(fruit);
});

// http://localhost:8080/fruit - Testing request.body && request.params
app.put("/fruit/:name", (req, res) => {
  let fruitToAdd = req.body.fruit;
  let fruitToReplace = req.params.name;
  let index = fruit.indexOf(fruitToReplace);
  fruit.splice(index, 1, fruitToAdd);
  res.send(fruit);
});

// http://localhost:8080/fruit - Testing request.params
app.delete("/fruit/:name", (req, res) => {
  let fruitToReplace = req.params.name;
  let index = fruit.indexOf(fruitToReplace);
  fruit.splice(index, 1);
  res.send(fruit);
});

// http://localhost:8080/user/Bill - Testing request Parameters
app.get("/user/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.listen(8080, () => {
  console.log("Application listening to port 8080");
});
