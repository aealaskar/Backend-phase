const Product = require("../../models/Product");

exports.productListFetch = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.productById = (req, res) => {
  const specificProduct = products.find(
    (specificProduct) => specificProduct.id === +req.params.productId
  );
  return res.json(specificProduct);
};

exports.productCreate = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.productDelete = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findByIdAndDelete({ _id: productId });
    if (foundProduct) {
      return res.status(204).end();
    } else {
      // return res.status(404).json({ message: "Product not found!" });

      next({
        status: 404,
        message: "Product not found!",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.productUpdate = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (product) {
      return res.json(product);
    } else {
      // return res.status(404).json({ message: "Product not Found!" });
      next({
        status: 404,
        message: "Product not found!",
      });
    }
  } catch (error) {
    next(error);
  }
};
