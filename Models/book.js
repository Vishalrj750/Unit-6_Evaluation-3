const mongoose = require('mongoose');

const book = new mongoose.Schema({
    likes: { type: Number, required: true, default: 0 },
    coverImages: { type: String, required: true },
    content: { type: Number, required: true },
    timeStamps: { type: String, required: true }
})

module.exports = mongoose.model('book', book);