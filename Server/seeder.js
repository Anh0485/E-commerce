import mongoose from "mongoose";
import dotenv from 'dotenv';
import users from './data/users.js';
import products from "./data/products.js";
import User from './Model/userModel.js'
import Product from "./Model/productModel.js";
import connectDB from './config/connectDB.js';
import colors from 'colors'
import Order from "./Model/orderModel.js";
dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Order.deleteMany();
        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return {
                ...product,
                user: adminUser
            }
        })
        await Product.insertMany(sampleProducts)
        console.log('Data Imported'.green.inverse)
        process.exit()
    } catch (e) {
        console.error(`${e}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany();
        console.log('Data Destroyed'.green.inverse)
        process.exit()
    } catch (e) {
        console.error(`${e}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}

