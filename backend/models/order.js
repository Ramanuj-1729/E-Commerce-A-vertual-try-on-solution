const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderItems: [{ type: Schema.Types.ObjectId, ref: 'OrderItem', required: true }],
    shippingAddress: { type: Schema.Types.ObjectId, ref: 'Address', required: true },
    status: { type: String, required: true, default: 'Pending', },
    totalPrice: { type: Number, required: true, },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema, 'orders');