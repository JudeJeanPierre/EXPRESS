const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
        orderName: { type: String, required: true },
        userId: { type: String, required: true },
        address: { type: String, required: true },
        productName: { type: String, required: true },
        product_id: {type: String},
        category: { type: String, required: true },
        quantity: {type: Number,default: 1},
        amount: { type: Number, required: true },
    },
    { timestamps: true }
    );

const Order = mongoose.model('Order', orderSchema)

module.exports = Order