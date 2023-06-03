import express from 'express'
const router = express.Router();
// import products from '../data/products.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../Model/productModel.js';
import { getProductById, getProducts } from '../controllers/productController.js';

//get all product
router.route('/').get(getProducts);

//get by id
router.route('/:id').get(getProductById);

export default router;
