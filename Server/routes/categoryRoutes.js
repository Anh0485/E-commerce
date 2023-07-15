import express from 'express'
const router = express.Router();
// import products from '../data/products.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../Model/productModel.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { getAllCategories } from '../controllers/categoryController.js';


//get all category
router.route('/all').get(protect, admin, getAllCategories)

//get by id

export default router;
