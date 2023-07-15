import asyncHandler from "../middleware/asyncHandler.js";
import Category from "../Model/categoryModel.js";

//@desc Fetch all category
//@route GET /api/categories/all
//@access private/admin

const getAllCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({}).sort({ _id: -1 });
    res.json(categories);
})


//@desc Fetch a product
//@route GET /api/product/:id
//@access Public


//@desc Fetch all products
//@route GET /api/products
//@access Private/ admin



export { getAllCategories };