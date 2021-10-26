const express = require("express");
const router = express.Router();
const {
  productListFetch,
  productById,
  productCreate,
  productDelete,
  productUpdate,
} = require("./controllers");
const products = require("../../data");

router.get("/", productListFetch);

router.get("/:productId", productById);

router.post("/", productCreate);

router.delete("/:productId", productDelete);

router.put("/:productId", productUpdate);

module.exports = router;
