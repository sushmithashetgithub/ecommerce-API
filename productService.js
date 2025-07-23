// service/productService.js

function getProducts() {
  return "Fetching all products";
}

function getProductById(id) {
  return `Fetching product with ID: ${id}`;
}

function addProduct() {
  return "Adding a new product";
}

function editProduct() {
  return "put request called.";
}

function deleteProduct() {
  return "delete request called.";
}

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
};
