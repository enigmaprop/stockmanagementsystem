const Order = require('../models/order');

const {
    getProductById ,
    updateProduct ,
} = require('./products')

module.exports.addOrder = (data)=>{
    try{
        const products = data.products.map(async(product , i)=>{
            const productData = await getProductById(product.id);
            if(productData){
                const initialQuantity = productData.quantity;
                const newQuantity = initialQuantity - product.quantity;
    
                if(newQuantity > 0 || newQuantity === 0){
                    const response = await updateProduct({id: product.id , quantity: product.quantity});
                    return {success: true , msg: 'نجحت معالجة المنتج' , productData};
                }else{
                    return {success: false , msg: 'المنتج نافذ الكمية' , productData};
                }
            }else{
                return {success:false , msg: 'هذا المنتج غير موجود' , productData: {}};
            }
        })
        
        const newOrder = new Order({
            id: data.id ,
            name: data.name ,
            date: data.date ,
            products: products.map((product , i) => product.productData),
        })
        newOrder.save();
        return products.map((product , i)=>{return {success: product.success , msg: product.msg}});

    }catch(err){
        return err ;
    }
}
