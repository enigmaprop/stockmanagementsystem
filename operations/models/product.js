const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type:String ,
        required: true ,
    },
    name: {
        type:String ,
        required: true ,
    },
    price:{
        type:Number,
        required: true ,
    },
    quantity:{
        type: Number ,
        required: true ,
    }
})

const Product = mongoose.model('products' , productSchema);

module.exports = Product ;