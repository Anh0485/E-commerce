import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    color: {
        type: Object,
        require: true,
    },
    size: {
        type: Object,
        require: true
    },
    image: {
        type: Object,
        require: true,
    },
    description: {
        type: Object,
        require: true,
    },
    sizeChart: {
        type: Object,
        require: true,
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        require: true,
        default: 0,
    },
    catagory: {
        type: String,
        require: true
    }

})

const Product = mongoose.model('Product', productSchema);

export default Product