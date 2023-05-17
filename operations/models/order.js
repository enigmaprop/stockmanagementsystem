const mongoose = require('mongoose');

const orderSchame = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    products:[
        {
            id:{
                type:String,
                required:true,
            },
            name:{
                type:String,
                required:true,
            },
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            },
            outOfStock:{
                type:Boolean,
                required:true,
            }
        }
    ]
    
})

const Order = mongoose.model('orders' , orderSchame);

module.exports = Order;