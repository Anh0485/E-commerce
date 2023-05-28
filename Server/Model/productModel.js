import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        default:0
    },
    color:{
        type:String,
        require:true
    },
    size:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    sizeChart:{
        type:String,
        require:true,
    },
    countInStock: {
        type: Number,
        require: true,
        default:0,
    },
    numReviews: {
        type: Number,
        require: true,
        default:0,
    },

})

const Product = mongoose.model('Product',productSchema);

export default Product