const Product = require('../models/product');

module.exports.addProduct = async(data)=>{
    try{
        const newProduct = new Product(data);
        await newProduct.save();
        return "تمت ااضافة المنتج بنجاح";
    }catch(err){
        return err;
    }
}

module.exports.deleteProduct = async(id)=>{
    try{
        await Product.deleteOne({id});
        return('تم حذف المنتج بنجاح');
    }catch(err){
        return err
    }
}

module.exports.updateProduct = async(data)=>{
    try{
        if(data.name){ 
            await Product.updateOne({id:data.id} , {name:data.name});
            return 'تم تحديث اسم المنتج بنجاح';
        }else if(data.price){
            await Product.updateOne({id:data.id} , {price:data.price});
            return 'تم تحديث سعر المنتج بنجاح';
        }else if(data.quantity){
            await Product.updateOne({id:data.id} , {quantity:data.quantity})
            return 'تم تحديث كمية المنتج بنجاح';
        }
        else{
            return 'هذا الحقل غير موجود';
        }
       
    }catch(err){
        return err;
    }
}

module.exports.getProductById = async(id)=>{
    try{
        const product = await Product.findOne({id});
        return product;
    }catch(err){
        return err;
    }
}

module.exports.getProductsByName = async(name)=>{
    try{
        const products = await Product.find({name});
        return products;
    }catch(err){
        return err;
    }
}