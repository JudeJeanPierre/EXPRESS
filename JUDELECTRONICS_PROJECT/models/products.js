const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {},
    brand:{type: String, required: true},
    price: {type: String, required: true},
    product_details: {type: String, required: true},
    category: {type: String, required: true},
    product_id:{type: String, required: true},
    inStock: {type: Number, required: true},
    isProductNew: Boolean

});

const Product = mongoose.model('Product', productSchema)

module.exports = Product