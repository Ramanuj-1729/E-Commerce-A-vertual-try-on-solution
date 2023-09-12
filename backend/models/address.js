const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
    recipientName: { type: String, required: true, },
    apartment: { type: String, },
    city: { type: String, required: true, },
    state: { type: String, required: true, },
    postalCode: { type: String, required: true, },
    country: { type: String, required: true, },
    phoneNumber: { type: String, required: true, },
    isDefault: { type: Boolean, default: false, },
}, { timestamps: true });

module.exports = mongoose.model('Address', addressSchema, 'addresses');