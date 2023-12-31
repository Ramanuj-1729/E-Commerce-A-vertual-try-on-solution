const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required: true, trim: true, minlength: 3},
    lastName: {type: String, required: true, trim: true, minlength: 3},
    email: {type: String, required: true, trim: true, minlength: 3},
    password: {type: String, required: true, trim: true, minlength: 3},
    isAdmin: {type: Boolean, default: false},
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema, 'users');