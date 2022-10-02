const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    billingName: {type: String, required: true},
    billingAddress: {type: String, required: true},
    billingCity: {type: String, required: true},
    billingState: {type: String, required: true},
    billingZip: {type: Number, required: true},
    billingCountry: {type: String, required: true},
    billingPhone: {type: String, required: true}
})

const Billing = mongoose.model('Billing', billingSchema)

module.exports = Billing