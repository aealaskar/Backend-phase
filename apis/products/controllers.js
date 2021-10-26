const Product = require("../../models/Product");

exports.productListFetch = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

exports.productById = (req, res) => {
  const specificProduct = products.find(
    (specificProduct) => specificProduct.id === +req.params.productId
  );
  return res.json(specificProduct);
};

exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

exports.productDelete = async (req, res) => {
  try {
    const foundProduct = await Product.findById(req.params.productId);
    if (foundProduct) {
      await foundProduct.remove();
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};
