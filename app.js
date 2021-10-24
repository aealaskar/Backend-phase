const express = require("express");
const app = express();

const products = require("./data");

app.listen(8000, () => {
  console.log("The application is running on lcoalhost:8000");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
