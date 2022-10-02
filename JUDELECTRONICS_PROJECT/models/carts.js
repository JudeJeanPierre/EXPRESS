const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    cartNumber: { type: String, required: true },
    userId: { type: String, required: true },
    productName: { type: String, required: true },
    product_id: { type: String, },
    quantity: { type: Number, default: 1, },
        },
    
    { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart