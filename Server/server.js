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

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');


    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});




//Cookies parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
