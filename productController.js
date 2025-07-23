// controllers/productController.js

const productService = require("../service/productService");

const getProducts = (req, res) => {
  const response = productService.getProducts();
  res.send(response);
};

const getProductsByID = (req, res) => {
  const id = req.params.id;
  const response = productService.getProductById(id);
  res.send(response);
};

const PostNewProduct = (req, res) => {
  const response = productService.addProduct();
  res.send(response);
};

const editProduct = (req, res) => {
  const response = productService.editProduct();
  res.send(response);
};

const deleteProduct = (req, res) => {
  const response = productService.deleteProduct();
  res.send(response);
};

module.exports = {
  getProducts,
  getProductsByID,
  PostNewProduct,
  editProduct,
  deleteProduct,
};
