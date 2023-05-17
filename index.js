const express = require("express");
const app = express();

const fruit = ["Apple", "Banana"];

// http://localhost:8080/
app.get("/", (request, response) => {
  response.send("Hello World");
});

// http://localhost:8080/fruit
app.get("/", (request, response) => {
  response.send(fruit);
});

app.listen(8080, () => {
  console.log("Application listening to port 8080");
});
