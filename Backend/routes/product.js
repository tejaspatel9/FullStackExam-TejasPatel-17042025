const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middlewares/upload'); // 👈 multer middleware

// CRUD
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', upload.single('image'), productController.createProduct); // 👈 updated line
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

// Aggregation
router.get('/stats/category', productController.getCategoryStats);

module.exports = router;
