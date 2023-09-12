const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true, },
    description: {type: String, default: '', },
    image: {type: String, required: true, },
    images: [{type: String, }],
    colors: [{type: String, required: true, }],
    sizes: [{type: String, required: true, }],
    brand: {type: String, default: '', },
    price: {type: Number, required: true, default: 0, },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true, },
    countInStock: {type: Number, required: true, min: 0, max: 255, },
    rating: {type: Number, default: 0, },
    numReviews: { type: Number, default: 0, },
    isFeatured: { type: Boolean, default: false, },
}, {timestamps: true});

module.exports = mongoose.model('Product', productSchema, 'products');