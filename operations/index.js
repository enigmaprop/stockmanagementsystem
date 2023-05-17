const uuid = require('uuid');

const {

    addProduct ,
    deleteProduct ,
    updateProduct ,
    getProductById ,
    getProductsByName

} = require('./controller/products');

const {

    addOrder ,

} = require('./controller/orders');

const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/stockmanage');

