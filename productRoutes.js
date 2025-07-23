const express = require('express'); 
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.post('/', productController.PostNewProduct);
router.get('/:id', productController.getProductsByID);
router.put('/:id', productController.editProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;