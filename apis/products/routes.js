const express = require("express");
const router = express.Router();
const {
  productListFetch,
  productById,
  productCreate,
  productDelete,
} = require("./controllers");
const products = require("../../data");

router.get("/", productListFetch);

router.get("/:productId", productById);

router.post("/", productCreate);

router.delete("/:productId", productDelete);

module.exports = router;
