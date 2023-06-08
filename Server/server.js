import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config();
connectDB();
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



//Cookies parser middleware
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
