const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const orederItemSchema = new Schema({
    quantity: { type: Number, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', },
}, {timestamps: true});

module.exports = mongoose.model('OrderItem', orederItemSchema, 'orderItems');