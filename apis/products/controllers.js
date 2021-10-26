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

exports.productCreate = (req, res) => {
  // products.push(req.body);
  // res.json(req.body); this way or one below which add an id to every POST
  const newProducts = { ...req.body, id: products[products.length - 1].id + 1 };
  products.push(newProducts);
  res.status(201);
  return res.json(newProducts);
};

exports.productDelete = (req, res) => {
  // const product = products.filter(
  //   (product) => product.id !== +req.params.productId
  // ); this way works but adding find is better to check if the id exists first
  // return res.json(product);
  const productId = req.params.productId;
  const product = products.find((product) => product.id === +productId);
  if (product) {
    products.filter((product) => product.id !== +productId);
    return res.status(204).end();
  } else {
    return res.status(404).json({ message: "Product not found!" });
  }
};
