const express = require("express");
const app = express();
const productRoutes = require("./apis/products/routes");

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(8000, () => {
  console.log("The application is running on lcoalhost:8000");
});
