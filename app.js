const express = require("express");
const router = require("./apis/products/routes");
const app = express();
const productRoutes = require("./apis/products/routes");
const connectDB = require("./database");

app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
});

app.use("/api/products", productRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path Not Found!" });
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

connectDB();

app.listen(8000, () => {
  console.log("The application is running on lcoalhost:8000");
});
