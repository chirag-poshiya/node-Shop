const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/product => GET
router.post('/add-product', adminController.postAddProduct);

// /admin/edit-product => GET
router.get('/edit-product', adminController.getEditProduct);

module.exports = router;
