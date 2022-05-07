const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 3, maxlength: 20 },
    lastName: { type: String, required: true, minlength: 3, maxlength: 20 },
    age: { type: Number, required: true, min: 1, max: 150 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImages: [{ type: String, required: true }],
    timeStamps: { type: String, required: true }
})

module.exports = mongoose.model('user', user);